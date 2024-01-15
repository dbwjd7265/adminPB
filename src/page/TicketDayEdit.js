import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";
import succ from "../resources/success.png";
import fail from "../resources/fail.png";

//일일입장 수정

const TicketDayEdit = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  const openPopup = (popup) => {
    setPopupVisible(true);
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedPopup(null);
  };

  const popCoupon = () => {
    if (selectedPopup !== "pop-ticket") {
      closePopup();
      openPopup("pop-ticket");
    } else {
      closePopup();
    }
  };

  const popClose = () => {
    closePopup();
  };

  //사이드
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const openSidePanel = () => {
    setSidePanelVisible(true);
  };
  const closeSidePanel = () => {
    setSidePanelVisible(false);
  };

  //그룹추가
  const [groups, setGroups] = useState(['그룹1']);
  const addGroup = () => {
    const newGroup = `그룹${groups.length + 1}`;
    setGroups([...groups, newGroup]);
  };
  const removeGroup = (index) => {
    const updatedGroups = [...groups];
    updatedGroups.splice(index, 1);
    setGroups(updatedGroups);
  };

  return (
    <>
      <div className="container" style={{ minHeight: "calc(100vh - 125px )" }}>
        {/* 사이드 */}
        <SidePanel isSidePanelVisible={isSidePanelVisible} openSidePanel={openSidePanel} closeSidePanel={closeSidePanel}/>

        {/* 본문 */}
        <h1 className="page-title">
          <button onClick={openSidePanel}>
            <box-icon name="menu" color="#8C95A0" size="csssize"></box-icon>
          </button>
          일일입장/정기권 관리
        </h1>
        <div className="content w1100">
          <p className="content-name">일일입장 등록 및 수정</p>
          <p className="content-tit">기간을 설정해 주세요</p>
          <ul className="d-flex input-flex">
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">시작일</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">종료일</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
          </ul>

          <p className="content-sub">요일</p>
          <div className="input-box d-flex">
            <div className="checks">
              <input type="checkbox" id="day0" />
              <label for="day0">전체</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day1" />
              <label for="day1">월</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day2" />
              <label for="day2">화</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day3" />
              <label for="day3">수</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day4" />
              <label for="day4">목</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day5" />
              <label for="day5">금</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day6" />
              <label for="day6">토</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="day7" />
              <label for="day7">일</label>
            </div>
          </div>

          <p className="content-tit">일일입장 그룹선택</p>
          <button className="text-btn" onClick={addGroup}>
            <span>
              <box-icon type="solid" name="plus-circle" color="#7F56D9"size="csssize"></box-icon>
            </span>
            그룹 추가
          </button>
          <div className="input-box">
            <ul className="ticket-gruop">
              {groups.map((group, index) => (
                <li key={index}>
                  <div className="group-num">
                    {index > 0 && (
                    <button className="delet" onClick={() => removeGroup(index)}>
                      <box-icon type="solid" name="minus-circle" color="#7F56D9" size="csssize"></box-icon>
                    </button>
                    )}
                    <p>{group}</p>
                  </div>
                  <div className="group-time">
                    <p class="content-sub">시간</p>
                    <div className="d-flex">
                      <select>
                        <option>00:00 ~ 00:00</option>
                        <option>00:00 ~ 00:00</option>
                      </select>
                      <span>~</span>
                      <select>
                        <option>00:00 ~ 00:00</option>
                        <option>00:00 ~ 00:00</option>
                      </select>
                    </div>
                  </div>
                  <div className="group-court">
                    <p class="content-sub">코트</p>
                    <ul>
                      <li>
                        <input type="checkbox" id="ct1" />
                        <label for="ct1">1코트 : 10명</label>
                      </li>
                      <li>
                        <input type="checkbox" id="ct2" />
                        <label for="ct2">2코트 : 10명</label>
                      </li>
                      <li>
                        <input type="checkbox" id="ct3" disabled />
                        <label for="ct3">3코트 : 10명</label>
                      </li>
                      <li>
                        <input type="checkbox" id="ct4" />
                        <label for="ct4">4코트 : 10명</label>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-box search" style={{borderBottom:'none'}}>
            <ele.BtnColor>결과보기</ele.BtnColor>
          </div>

          <ele.ListTable className="table-type2">
            <thead>
              <tr>
                <th className="chk" style={{ width: "50px" }}>
                  <input type="checkbox" id="t-all" />
                  <label for="t-all"></label>
                </th>
                <th
                  className="g-info"
                  style={{ width: "calc( 100% - 320px )" }}
                >
                  그룹정보
                </th>
                <th className="date" style={{ width: "120px" }}>
                  날짜
                </th>
                <th className="or" style={{ width: "150px" }}>
                  등록 가능 여부
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="chk">
                  <input type="checkbox" id="t-chk1" />
                  <label for="t-chk1"></label>
                </td>
                <td className="g-info">
                  그룹1(00:00 ~ 00:00 / 1 코트, 2 코트, 3 코트, 4 코트, 5 코트,
                  6 코트)
                </td>
                <td className="date">2023.00.00</td>
                <td className="or">
                  <p className="no">불가능(정기대관)</p>
                </td>
              </tr>
            </tbody>
          </ele.ListTable>

          <p className="content-tit">일일입장 판매인원</p>
          <div className="stepper">
            <label>10</label>
            <button><box-icon name='minus' size='cssSize' color='#8E8E93'></box-icon></button>
            <span className="line"></span>
            <button><box-icon name='plus'  size='cssSize' color='#8E8E93'></box-icon></button>
          </div>

          <p className="content-tit">일일입장 가격</p>
          <div className="input-box d-flex" style={{ width: "600px" }}>
            <input type="text" style={{ width: "calc( 100% - 50px )" }}></input>
            <span>원</span>
          </div>
          <p className="content-sub">정상가 보다 높은 가격은 설정 할 수 없습니다. (정상가:15,000원)</p>


          <p className="content-tit">딱플 정산 금액</p>
          <ele.ListTable className="table-type2">
            <thead>
              <tr>
                <th className="g-info" style={{ width: "120px" }}>
                  코트 수
                </th>
                <th className="date" style={{ width: "120px" }}>
                  총 인원 수
                </th>
                <th className="or" style={{ width: "calc( 100% - 320px )" }}>
                  예상 수익
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="g-info">
                  100개
                </td>
                <td className="date">100명</td>
                <td className="or">
                  <p className="yes">999,999,999원</p>
                </td>
              </tr>
            </tbody>
          </ele.ListTable>
          <div className="btn-box total">
            <ele.BtnWhite>취소</ele.BtnWhite>
            <ele.BtnColor>저장</ele.BtnColor>
          </div>
        </div>
      </div>

      {/* 정기권 등록 팝업 */}
      <ele.Popup isVisible={isPopupVisible} width="600">
        <div className="dimd"></div>
        <div className="pop-box pop-ticket">
          <p className="content-name">
            정기권 등록 및 수정
            <ele.BtnClose onClick={popClose}>닫기</ele.BtnClose>
          </p>

          <p className="content-tit">정기권 설정 코트 선택</p>
          <div className="input-box d-flex">
            <div className="checks">
              <input type="checkbox" id="c1" />
              <label for="c1">1코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c2" />
              <label for="c2">2코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c3" />
              <label for="c3">3코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c4" />
              <label for="c4">4코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c5" />
              <label for="c5">5코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c6" />
              <label for="c6">6코트 : 6명</label>
            </div>
          </div>

          <p className="content-tit">정기권 종류 (택 1)</p>
          <div className="input-box">
            <select>
              <option>평일 오전</option>
              <option>평일 오후</option>
              <option>평일 야간</option>
              <option>주말 오전</option>
              <option>주말 오후</option>
              <option>주말 야간</option>
              <option>전체 오전</option>
              <option>전체 오후</option>
              <option>전체 야간</option>
            </select>
          </div>

          <p className="content-tit">가격</p>
          <p className="content-sub">기본 가격</p>
          <div className="input-box d-flex">
            <input type="text" style={{ width: "calc( 100% - 50px )" }}></input>
            <span>원</span>
          </div>

          <p className="content-sub" style={{ marginTop: "20px" }}>
            할인 가격
          </p>
          <ul className="center-res">
            <li className="checks">
              <input type="radio" id="show" name="cp-show" />
              <label for="show">할인 설정</label>
            </li>
            <li className="checks">
              <input type="radio" id="hidden" name="cp-show" />
              <label for="hidden">할인 미설정</label>
            </li>
          </ul>
          <ul className="d-flex" style={{ justifyContent: "space-between" }}>
            <li style={{ width: "calc( 65% - 10px )" }}>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
            <li style={{ width: "calc( 35% - 10px )" }}>
              <div className="input-box">
                <select>
                  <option>원</option>
                  <option>% (퍼센트)</option>
                </select>
              </div>
            </li>
          </ul>
          <p className="content-sub">
            약 <strong>1,000</strong>원 할인
          </p>

          <div className="line"></div>

          <p className="content-sub">최종 판매 금액</p>
          <div className="input-box d-flex">
            <input type="text" style={{ width: "calc( 100% - 50px )" }}></input>
            <span>원</span>
          </div>

          <div className="btn-box">
            <ele.BtnWhite onClick={popClose}>취소</ele.BtnWhite>
            <ele.BtnColor>저장</ele.BtnColor>
          </div>
        </div>

        {/* 등록 성공 */}
        <div className="pop-box pop-success" style={{ display: "none" }}>
          <div className="pop-img">
            <img src={succ} alt="성공아이콘" />
          </div>
          <p className="content-name">정기권 등록 등록완료</p>
          <div className="btn-box">
            <ele.BtnColor onClick={popClose} style={{ width: "100%" }}>
              확인
            </ele.BtnColor>
          </div>
        </div>

        {/* 등록 실패 */}
        <div className="pop-box pop-fail" style={{ display: "none" }}>
          <div className="pop-img">
            <img src={fail} alt="실패아이콘" />
          </div>
          <p className="content-name"> 정기권 등록 불가</p>
          <p className="content-sub">이미 등록된 예약 정보가 있습니다.</p>
          <div className="btn-box">
            <ele.BtnColor
              onClick={popClose}
              style={{ backgroundColor: "#D92D20", width: "100%" }}
            >
              확인
            </ele.BtnColor>
          </div>
        </div>
      </ele.Popup>
    </>
  );
};

export default TicketDayEdit;
