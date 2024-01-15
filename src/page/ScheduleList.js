import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";

const ScheduleList = () => {
  const [selectedType, setSelectedType] = useState("all");

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

  const popDetail = () => {
    if (selectedPopup !== "pop-detail") {
      closePopup();
      openPopup("pop-detail");
    } else {
      closePopup();
    }
  };

  const popCancel = () => {
    if (selectedPopup !== "pop-cancel") {
      closePopup();
      openPopup("pop-cancel");
    } else {
      closePopup();
    }
  };

  const popClose = () => {
    closePopup();
  };

  return (
    <>
      <div className="container">
        <h1 className="page-title">예약 리스트</h1>
        <ul className="d-flex list-tab">
          <li>
            <input
              type="radio"
              id="all"
              name="type"
              checked={selectedType === "all"}
              onChange={() => setSelectedType("all")}
            />
            <label htmlFor="all">전체 예약</label>
          </li>
          <li>
            <input
              type="radio"
              id="today"
              name="type"
              checked={selectedType === "today"}
              onChange={() => setSelectedType("today")}
            />
            <label htmlFor="today">Today 예약</label>
          </li>
        </ul>
        <div className="content w1100">
          <div className="search-box">
            <ul>
              <li>
                <div style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">검색어</p>
                  <div className="input-box">
                    <input type="text"></input>
                  </div>
                </div>
                <div className="allday" style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">
                    {selectedType === "all" ? "예약일" : "오늘날짜"}
                  </p>
                  <div className="input-box">
                    {selectedType === "all" ? (
                      <input type="text"></input>
                    ) : (
                      "2023년 00월 00일 0요일"
                    )}
                  </div>
                </div>
              </li>
              <li>
                <div style={{ width: "calc( 33.33% - 7px )" }}>
                  <p className="content-tit">예약타입</p>
                  <div className="input-box">
                    <select>
                      <option>앱 예약</option>
                      <option>정기권</option>
                      <option>일일입장</option>
                      <option>오프라인 예약</option>
                      <option>정기대관</option>
                    </select>
                  </div>
                </div>
                <div style={{ width: "calc( 33.33% - 7px )" }}>
                  <p className="content-tit">결제상태</p>
                  <div className="input-box">
                    <select>
                      <option>결제완료</option>
                      <option>결제대기</option>
                      <option>결제취소</option>
                    </select>
                  </div>
                </div>
                <div style={{ width: "calc( 33.33% - 7px )" }}>
                  <p className="content-tit">결제방식</p>
                  <div className="input-box">
                    <select>
                      <option>신용카드</option>
                      <option>오프라인 결제</option>
                    </select>
                  </div>
                </div>
              </li>
            </ul>
            <div className="btn-box search">
              <ele.BtnWhite>취소</ele.BtnWhite>
              <ele.BtnColor>검색</ele.BtnColor>
            </div>
          </div>
          <p className="content-name">예약 현황</p>
          <ele.ListTable className="list-table">
            <tr>
              <th className="pay-no">주문번호</th>
              <th className="name">예약자</th>
              <th className="date">예약일</th>
              <th className="text">예약정보</th>
              <th className="type">예약타입</th>
              <th className="price">결재금액(결재방식)</th>
              <th className="state">결재상태</th>
              <th className="pay-date">결재일</th>
            </tr>

            <tr onClick={popDetail}>
              <td className="pay-no">2309010932452</td>
              <td className="name">홍길동</td>
              <td className="date">23.00.00</td>
              <td className="text">
                1코트 | 08:00~10:00 / 2코트 | 10:00~12:00
              </td>
              <td className="type">오프라인 예약</td>
              <td className="price">200,000원(신용카드)</td>
              <td className="state">결제대기</td>
              <td className="pay-date">23.00.00 </td>
            </tr>
          </ele.ListTable>
          <ele.Page>
            <a href="#">&laquo;</a>
            <a href="#">&lsaquo;</a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">&rsaquo;</a>
            <a href="#">&raquo;</a>
          </ele.Page>
        </div>
        
      </div>

      {/* 팝업 */}
      <ele.Popup isVisible={isPopupVisible}>
        <div className="dimd"></div>
        {selectedPopup === "pop-detail" && (
          <div className="pop-box pop-detail">
            <p className="content-name">
              예약 정보 상세
              <ele.BtnClose onClick={popClose}>닫기</ele.BtnClose>
            </p>
            <ul>
              <li>
                <span>예약자명 :</span>
                <p>김민지 (test00001)</p>
              </li>
              <li>
                <span>주문번호 :</span>
                <p>947437820248</p>
              </li>
              <li>
                <span>예약일 :</span>
                <p>2023.00.00 ~ 2023.00.00</p>
              </li>
              <li>
                <span>예약타입 :</span>
                <p>정기권</p>
              </li>
              <li>
                <span>예약정보 :</span>
                <div>
                  <p>1코트 00:00 ~ 00:00</p>
                  <p>2코트 00:00 ~ 00:00</p>
                  <p>3코트 00:00 ~ 00:00</p>
                </div>
              </li>
            </ul>
            <p className="content-name">결제 정보</p>
            <ul>
              <li>
                <span>결제수단 :</span>
                <p>신용카드</p>
              </li>
              <li>
                <span>결제상태 :</span>
                <p>결제대기</p>
              </li>
            </ul>
            <div className="btn-box">
              <ele.BtnWhite onClick={popCancel}>예약 취소</ele.BtnWhite>
              <ele.BtnColor>확인</ele.BtnColor>
            </div>
          </div>
        )}

        {selectedPopup === "pop-cancel" && (
          <div className="pop-box pop-cancle">
            <p className="content-name">
              예약 취소
              <ele.BtnClose onClick={popClose}>닫기</ele.BtnClose>
            </p>
            <p className="content-tit">취소사유</p>
            <div className="input-box">
              <select>
                <option>결제 기한 초과</option>
                <option>회원 요청</option>
                <option>기타</option>
              </select>
            </div>
            <div className="btn-box">
              <ele.BtnWhite onClick={popClose}>닫기</ele.BtnWhite>
              <ele.BtnColor>확인</ele.BtnColor>
            </div>
          </div>
        )}
      </ele.Popup>
    </>
  );
};

export default ScheduleList;
