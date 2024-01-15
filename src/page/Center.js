import React, { useEffect, useState } from "react";
import "../css/style.css";
import upload from "../resources/upload-img.png";
import * as ele from "../components/element";
import * as gymTime from "../components/gym-time";

const Center = () => {
  // 파일업로드
  function DropFile(dropAreaId, fileListId) {
    let dropArea;
    let fileList;

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    function highlight(e) {
      preventDefaults(e);
      dropArea.classList.add("highlight");
    }

    function unhighlight(e) {
      preventDefaults(e);
      dropArea.classList.remove("highlight");
    }

    function handleDrop(e) {
      unhighlight(e);
      let dt = e.dataTransfer;
      let files = dt.files;

      handleFiles(files);

      if (fileList) {
        fileList.scrollTo({ top: fileList.scrollHeight });
      }
    }

    function handleFiles(files) {
      files = [...files];
      files.forEach(previewFile);
    }

    function previewFile(file) {
      console.log(file);
      renderFile(file);
    }

    function renderFile(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        let img = dropArea.getElementsByClassName("preview")[0];
        img.src = reader.result;
        img.style.display = "block";
      };
    }

    useEffect(() => {
      dropArea = document.getElementById(dropAreaId);
      fileList = document.getElementById(fileListId);

      dropArea.addEventListener("dragenter", highlight, false);
      dropArea.addEventListener("dragover", highlight, false);
      dropArea.addEventListener("dragleave", unhighlight, false);
      dropArea.addEventListener("drop", handleDrop, false);

      return () => {
        dropArea.removeEventListener("dragenter", highlight, false);
        dropArea.removeEventListener("dragover", highlight, false);
        dropArea.removeEventListener("dragleave", unhighlight, false);
        dropArea.removeEventListener("drop", handleDrop, false);
      };
    }, [dropAreaId, fileListId]);

    return {
      handleFiles,
    };
  }
  const dropFile = new DropFile("drop-file", "files");

  const [hasRest, setHasRest] = useState(true);
  const handleRestChange = (e) => {
    setHasRest(e.target.value === "yes");
  };

  const conven = [
    "무료주차",
    "샤워실",
    "정수기",
    "와이파이",
    "사우나",
    "냉난방",
    "용품샵",
    "화장실",
  ];
  const holidays = [
    "전체 휴무",
    "새해",
    "설 당일",
    "설날 전체",
    "삼일절",
    "어린이날",
    "석가탄신일",
    "현충일",
    "광복절",
    "추석 당일",
    "추석 전체",
    "개천절",
    "한글날",
    "크리스마스",
  ];
  const gym_time = ["오전", "오후", "야간"];

  const [isTypeChecked, setTypeChecked] = useState(true);
  const handleTypeChange = (e) => {
    setTypeChecked(e.target.value === "no");
  };

  const [selectedOption, setSelectedOption] = React.useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id);
  };

  //휴게시간
  const [restTimes, setRestTimes] = useState([]);
  const addRestTime = () => {
    setRestTimes([
      ...restTimes,
      <gymTime.RestTimeItem
        key={restTimes.length + 1}
        index={restTimes.length + 1}
      />,
    ]);
  };
  const deleteRestTime = (index) => {
    setRestTimes(restTimes.filter((_, i) => i !== index));
  };

  //시설 코트 수 증감
  const [totalCourts, setTotalCourts] = useState(1);
  const [courtDetails, setCourtDetails] = useState([
    { id: 1, maxCapacity: 10 },
  ]);
  const handleTotalCourtsChange = (amount) => {
    const newTotalCourts = totalCourts + amount;
    setTotalCourts(newTotalCourts);
    if (amount > 0) {
      const newCourt = { id: newTotalCourts, maxCapacity: 10 };
      setCourtDetails([...courtDetails, newCourt]);
    } else {
      setCourtDetails(courtDetails.slice(0, -1));
    }
  };
  const handleMaxCapacityChange = (index, amount) => {
    const updatedCourtDetails = [...courtDetails];
    const newMaxCapacity = Math.max(1, updatedCourtDetails[index].maxCapacity + amount);
    updatedCourtDetails[index].maxCapacity = Math.min(newMaxCapacity, maxPeople);
    setCourtDetails(updatedCourtDetails);
  };

  //코트 최대 정원 증감
  const [maxPeople, setMaxPeople] = useState(10);
  const handleMaxPeopleChange = (amount) => {
    const newMaxPeople = Math.max(1, maxPeople + amount);
    setMaxPeople(newMaxPeople);
    const updatedCourtDetails = courtDetails.map((court) => ({
      ...court,
      maxCapacity: Math.min(court.maxCapacity, newMaxPeople),
    }));
    setCourtDetails(updatedCourtDetails);
  };

  return (
    <div className="container">
      <h1 className="page-title"> 내 시설 정보 </h1>
      <div className="w1100">
        <div className="content">
          <p className="content-name">시설 전경 사진 등록</p>
          <p>썸네일 이미지 등록</p>
          <p className="content-sub">300px * 200px 의 크기로 등록해 주세요.</p>
          <div className="input-box photo thum">
            <div class="upload-box">
              <div id="drop-file" class="drag-file">
                <img src={upload} alt="파일 아이콘" class="image" />
                <img src="" alt="미리보기 이미지" class="preview" />
              </div>
              <label class="file-label" for="chooseFile">
                <strong>마우스로 파일을 끌고 오거나</strong> 여기를 클릭하세요.
                <br />
                PNG, JPG(30mb 이하)
              </label>
              <input
                className="file"
                id="chooseFile"
                type="file"
                onChange={(e) => dropFile.handleFiles(e.target.files)}
                accept="image/png, image/jpg"
              />
            </div>
          </div>

          <p>시설전경 이미지 등록</p>
          <p className="content-sub">1200px * 440px 의 크기로 등록해 주세요.</p>
          <div className="input-box photo all">
            <div class="upload-box">
              <div id="drop-file" class="drag-file">
                <img src={upload} alt="파일 아이콘" class="image" />
                <img src="" alt="미리보기 이미지" class="preview" />
              </div>
              <label class="file-label" for="chooseFile">
                <strong>마우스로 파일을 끌고 오거나</strong> 여기를 클릭하세요.
                <br />
                PNG, JPG(30mb 이하)
              </label>
              <input
                className="file"
                id="chooseFile"
                type="file"
                onChange={(e) => dropFile.handleFiles(e.target.files)}
                accept="image/png, image/jpg"
              />
            </div>
          </div>

          <p>상세 이미지 등록</p>
          <p className="content-sub">
            상세 이미지는 최대 10장까지 가능합니다. (0MB/30MB)
          </p>
          <div className="input-box photo detail">
            <div class="upload-box">
              <div id="drop-file" class="drag-file">
                <img src={upload} alt="파일 아이콘" class="image" />
                <img src="" alt="미리보기 이미지" class="preview" />
              </div>
              <label class="file-label" for="chooseFile">
                <strong>마우스로 파일을 끌고 오거나</strong> 여기를 클릭하세요.
                <br />
                PNG, JPG(30mb 이하)
              </label>
              <input
                className="file"
                id="chooseFile"
                type="file"
                onChange={(e) => dropFile.handleFiles(e.target.files)}
                accept="image/png, image/jpg"
              />
            </div>
          </div>
        </div>

        {/* 시설 기본정보 */}
        <div className="content">
          <p className="content-name">시설 기본정보</p>
          <p className="content-tit">예약 가능 여부</p>
          <p className="content-sub">
            예약불가로 설정시 해당 시설은 예약 등록과 검색에 노출되지 않습니다.
          </p>
          <div className="input-box">
            <ul className="center-res">
              <li className="checks">
                <input type="radio" id="ex_rd" name="ex_rds" />
                <label for="ex_rd">예약가능</label>
              </li>
              <li className="checks">
                <input type="radio" id="ex_rd2" name="ex_rds" />
                <label for="ex_rd2">예약불가</label>
              </li>
            </ul>
          </div>

          <p className="content-tit">업체명</p>
          <div className="input-box">
            <input type="text"></input>
          </div>

          <p className="content-tit">주소</p>
          <div className="d-flex">
            <div className="input-box">
              <input type="text"></input>
            </div>
            <button className="btn-defalt">우편번호</button>
          </div>
          <div className="input-box"> </div>

          <p className="content-tit">홈페이지</p>
          <div className="input-box">
            <input type="text"></input>
          </div>

          <p className="content-tit">연락처</p>
          <div className="input-box">
            <input type="text"></input>
          </div>
        </div>

        {/* 시설 상세정보 */}
        <>
          <div className="content">
            <p className="content-name">시설 상세정보</p>
            <p className="content-tit">시설 총 코트 수</p>
            <div className="stepper all-court">
              <label>{totalCourts}</label>
              <button>
                <box-icon
                  name="minus"
                  size="cssSize"
                  color="#8E8E93"
                  onClick={() => handleTotalCourtsChange(-1)}
                ></box-icon>
              </button>
              <span className="line"></span>
              <button>
                <box-icon
                  name="plus"
                  size="cssSize"
                  color="#8E8E93"
                  onClick={() => handleTotalCourtsChange(1)}
                ></box-icon>
              </button>
            </div>

            <p className="content-tit">코트 최대 정원</p>
            <div className="stepper mxpeople-court">
              <label>{maxPeople}</label>
              <button>
                <box-icon name="minus" size="cssSize" color="#8E8E93" onClick={() => handleMaxPeopleChange(-1)}></box-icon>
              </button>
              <span className="line"></span>
              <button>
                <box-icon name="plus" size="cssSize" color="#8E8E93" onClick={() => handleMaxPeopleChange(1)}></box-icon>
              </button>
            </div>

            <p className="content-tit">코트별 최대 정원</p>
            <ele.ListTable style={{ marginTop: "10px" }}>
              <tr>
                <th style={{ width: "200px" }}>코트 번호</th>
                <th>최대 정원</th>
              </tr>
              {courtDetails.map((court, index) => (
                <tr className="court-num" key={index}>
                  <td>{`코트${court.id}`}</td>
                  <td>
                    <div className="stepper sm mx-court">
                      <label>{court.maxCapacity}</label>
                      <button onClick={() => handleMaxCapacityChange(index, -1)}>
                        <box-icon name="minus" size="cssSize" color="#8E8E93"></box-icon>
                      </button>
                      <span className="line"></span>
                      <button onClick={() => handleMaxCapacityChange(index, 1)}>
                        <box-icon name="plus" size="cssSize" color="#8E8E93"></box-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </ele.ListTable>

            <p className="content-tit">코트 사용 인원 안내 문자</p>
            <p className="content-sub">
              고객분들이 한눈에 확인 하실 수 있도록 코트/인원 총원을 안내해
              주세요.
            </p>
            <div className="input-box">
              <textarea cols="30" rows="5"></textarea>
            </div>

            <p className="content-tit">편의시설</p>
            <div className="input-box d-flex check-list">
              {conven.map((conven, index) => (
                <div key={index} className="checks">
                  <input type="checkbox" id={`ex_conven${index + 1}`} />
                  <label htmlFor={`ex_conven${index + 1}`}>{conven}</label>
                </div>
              ))}
            </div>

            <p className="content-tit">기타 편의시설</p>
            <p className="content-sub">
              {" "}
              선택사항에 없는 시설관만의 편의 시설을 적어주세요.{" "}
            </p>
            <div className="input-box">
              <textarea cols="30" rows="3"></textarea>
            </div>

            <p className="content-tit">시설 소개말</p>
            <p className="content-sub">
              간략한 시설 소개를 적어주세요. (100자 이하){" "}
            </p>
            <div className="input-box">
              <textarea cols="30" rows="5"></textarea>
            </div>
          </div>
        </>

        {/* 휴무일 설정 */}
        <div className="content">
          <p className="content-name">휴무일 설정</p>

          <p className="content-tit">휴무일 유무</p>
          <div className="input-box">
            <ul className="center-res">
              <li className="checks">
                <input
                  type="radio"
                  id="rest_yes"
                  name="rest"
                  value="yes"
                  onChange={handleRestChange}
                  checked={hasRest}
                />
                <label htmlFor="rest_yes">휴무일이 있어요</label>
              </li>
              <li className="checks">
                <input
                  type="radio"
                  id="rest_no"
                  name="rest"
                  value="no"
                  onChange={handleRestChange}
                  checked={!hasRest}
                />
                <label htmlFor="rest_no">휴무일이 없어요</label>
              </li>
            </ul>
          </div>
          {hasRest && (
            <>
              <p className="content-tit">공휴일 설정</p>
              <div className="input-box d-flex check-list">
                {holidays.map((holiday, index) => (
                  <div key={index} className="checks">
                    <input type="checkbox" id={`ex_holiday${index + 1}`} />
                    <label htmlFor={`ex_holiday${index + 1}`}>{holiday}</label>
                  </div>
                ))}
              </div>

              <p className="content-tit">그 외 휴무일 설정</p>
              <button className="text-btn">
                <span>
                  <box-icon
                    type="solid"
                    name="plus-circle"
                    color="#7F56D9"
                    size="csssize"
                  ></box-icon>
                </span>
                날짜로 추가
              </button>
              <div className="input-box">
                <ul className="holiday-list">
                  <li>
                    2023.00.00
                    <button>
                      <box-icon
                        type="solid"
                        name="minus-circle"
                        color="#7F56D9"
                        size="csssize"
                      ></box-icon>
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* 영업시간 및 대여비 + 휴게시간 */}
        <div className="content">
          <p className="content-name">영업 시간 및 대여비 설정</p>

          <p className="content-tit">영업일별 구분</p>
          <div className="input-box">
            <ul className="center-res">
              <li className="checks">
                <input
                  type="radio"
                  id="time1"
                  name="time"
                  checked={selectedOption === "time1"}
                  onChange={handleOptionChange}
                />
                <label for="time1">모든 영업일이 같아요</label>
              </li>
              <li className="checks">
                <input
                  type="radio"
                  id="time2"
                  name="time"
                  checked={selectedOption === "time2"}
                  onChange={handleOptionChange}
                />
                <label for="time2">평일/주말 달라요</label>
              </li>
              <li className="checks">
                <input
                  type="radio"
                  id="time3"
                  name="time"
                  checked={selectedOption === "time3"}
                  onChange={handleOptionChange}
                />
                <label for="time3">요일별로 달라요</label>
              </li>
            </ul>
          </div>

          <p className="content-tit">영업시간</p>
          <div className="input-box">
            <ul className="center-res">
              <li className="checks">
                <input
                  type="radio"
                  id="type_no"
                  name="type"
                  value="no"
                  checked={isTypeChecked}
                  onChange={handleTypeChange}
                />
                <label htmlFor="type_no">구분있음</label>
              </li>
              <li className="checks">
                <input
                  type="radio"
                  id="type_yes"
                  name="type"
                  value="yes"
                  checked={!isTypeChecked}
                  onChange={handleTypeChange}
                />
                <label htmlFor="type_yes">구분없음</label>
              </li>
            </ul>
          </div>

          {/* 오전, 오후, 야간 체크 */}
          {isTypeChecked && (
            <div className="input-box d-flex check-list">
              {gym_time.map((time, index) => (
                <div key={index} className="checks">
                  <input type="checkbox" id={`gym_time${index + 1}`} />
                  <label htmlFor={`gym_time${index + 1}`}>{time}</label>
                </div>
              ))}
            </div>
          )}
          <div className="time-detail">
            {selectedOption === "time1" && !isTypeChecked && (
              <gymTime.TimeRange period={["시간"]} dayType={["모든 영업일"]} />
            )}
            {selectedOption === "time1" && isTypeChecked && (
              <gymTime.TimeRange
                period={["오전", "오후", "야간"]}
                dayType={["모든 영업일"]}
              />
            )}
            {selectedOption === "time2" && !isTypeChecked && (
              <gymTime.TimeRange
                period={["시간"]}
                dayType={["평일(월~금)", "주말(토,일,공휴일)"]}
              />
            )}
            {selectedOption === "time2" && isTypeChecked && (
              <gymTime.TimeRange
                period={["오전", "오후", "야간"]}
                dayType={["평일(월~금)", "주말(토,일,공휴일)"]}
              />
            )}
            {selectedOption === "time3" && !isTypeChecked && (
              <gymTime.TimeRange
                period={["시간"]}
                dayType={[
                  "월요일",
                  "화요일",
                  "수요일",
                  "목요일",
                  "금요일",
                  "토요일",
                  "일요일",
                ]}
              />
            )}
            {selectedOption === "time3" && isTypeChecked && (
              <gymTime.TimeRange
                period={["오전", "오후", "야간"]}
                dayType={[
                  "월요일",
                  "화요일",
                  "수요일",
                  "목요일",
                  "금요일",
                  "토요일",
                  "일요일",
                ]}
              />
            )}
          </div>

          {/* 휴게시간 */}
          <p className="content-tit">휴게시간</p>
          <button className="text-btn" onClick={addRestTime}>
            <span>
              <box-icon
                type="solid"
                name="plus-circle"
                color="#7F56D9"
                size="csssize"
              ></box-icon>
            </span>
            휴게시간 추가
          </button>
          <div className="input-box">
            <ul className="rest-time">
              {restTimes.map((restTime, index) => (
                <li key={index}>
                  {restTime}
                  <button
                    className="rest-delet"
                    onClick={() => deleteRestTime(index)}
                  >
                    <box-icon
                      type="solid"
                      name="minus-circle"
                      color="#7F56D9"
                      size="csssize"
                    ></box-icon>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btn-box total">
          <ele.BtnWhite>취소</ele.BtnWhite>
          <ele.BtnColor>저장</ele.BtnColor>
        </div>
      </div>
    </div>
  );
};

export default Center;
