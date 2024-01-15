import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";

//예약관리 - 정기대관 등록
const Regular = () => {
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const openSidePanel = () => {
    setSidePanelVisible(true);
  };
  const closeSidePanel = () => {
    setSidePanelVisible(false);
  };

  return (
    <>
      <div className="container" style={{ minHeight: "calc(100vh - 125px )" }}>
        {/* 사이드 */}
        <SidePanel
          isSidePanelVisible={isSidePanelVisible}
          openSidePanel={openSidePanel}
          closeSidePanel={closeSidePanel}
        />
        <h1 className="page-title">
          <button onClick={openSidePanel}>
            <box-icon name="menu" color="#8C95A0" size="csssize"></box-icon>
          </button>
          정기대관 관리
        </h1>

        {/* 본문 */}
        <div className="content w1100">
          <p class="content-name">정기대관 예약 등록</p>
          <p className="content-tit">지난 예약</p>
          <ul className="d-flex input-flex">
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">시작일</p>
              <div className="input-box"></div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">종료일</p>
              <div className="input-box"></div>
            </li>
            <li style={{ width: "100%" }}>
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
            </li>
          </ul>
          <div className="btn-box search" style={{borderBottom:'none'}}>
            <ele.BtnWhite>취소</ele.BtnWhite>
            <ele.BtnColor>지난 예약 불러오기</ele.BtnColor>
          </div>

          <p className="content-tit">예약자 정보</p>
          <ul className="d-flex input-flex">
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">예약자 명</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">연락처</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
          </ul>

          <p className="content-tit">코트선택</p>
          <div className="input-box">
            <ul className="court-choice">
              <li className="d-flex">
                <p className="time">전체 선택</p>
                <div className="court-choice-list">
                  <ul>
                    <li>
                      <input type="checkbox" id="all" />
                      <label for="all">전체선택</label>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <p className="time">07:00 ~ 08:00</p>
                <div className="court-choice-list">
                  <p class="content-sub">코트</p>
                  <ul>
                    <li>
                      <input type="checkbox" id="ct11" />
                      <label for="ct11">1코트 : 10명</label>
                    </li>
                    <li>
                      <input type="checkbox" id="ct12" />
                      <label for="ct12">2코트 : 10명</label>
                    </li>
                    <li>
                      <input type="checkbox" id="ct13" disabled />
                      <label for="ct13">3코트 : 10명</label>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <p className="time">08:00 ~ 09:00</p>
                <div className="court-choice-list">
                  <p class="content-sub">코트</p>
                  <ul>
                    <li>
                      <input type="checkbox" id="ct21" />
                      <label for="ct21">1코트 : 10명</label>
                    </li>
                    <li>
                      <input type="checkbox" id="ct22" />
                      <label for="ct22">2코트 : 10명</label>
                    </li>
                    <li>
                      <input type="checkbox" id="ct23" disabled />
                      <label for="ct23">3코트 : 10명</label>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn-box search" style={{borderBottom:'none'}}>
            <ele.BtnColor>결과보기</ele.BtnColor>
          </div>

          <ele.ListTable className="table-type1">
            <thead>
              <tr>
                <th className="chk">
                  <input type="checkbox" id="t-all" />
                  <label for="t-all"></label>
                </th>
                <th className="date">날짜</th>
                <th className="time">시간</th>
                <th className="court">코트선택</th>
                <th className="or">등록 가능 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="chk">
                  <input type="checkbox" id="t-chk1" />
                  <label for="t-chk1"></label>
                </td>
                <td className="date">2023.00.00</td>
                <td className="time">00:00 ~ 00:00</td>
                <td className="court">4코트</td>
                <td className="or">
                  <p className="yes">가능</p>
                </td>
              </tr>
              <tr>
                <td className="chk">
                  <input type="checkbox" id="t-chk2" />
                  <label for="t-chk2"></label>
                </td>
                <td className="date">2023.00.00</td>
                <td className="time">00:00 ~ 00:00</td>
                <td className="court">4코트</td>
                <td className="or">
                  <p className="no">불가능</p>
                </td>
              </tr>
            </tbody>
          </ele.ListTable>

          <div className="btn-box single">
            <ele.BtnColor>예약 등록</ele.BtnColor>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regular;
