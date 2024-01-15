import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";

//예약관리 - 오프라인등록
const Offline = () => {
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
        <SidePanel isSidePanelVisible={isSidePanelVisible}
          openSidePanel={openSidePanel}
          closeSidePanel={closeSidePanel}/>
        <h1 className="page-title">
          <button onClick={openSidePanel}>
            <box-icon name="menu" color="#8C95A0" size="csssize"></box-icon>
          </button>
          오프라인 예약
        </h1>

        {/* 본문 */}
        <div className="content w1100">
          <div className="offline-calendar" style={{ backgroundColor: "#eee", height: "450px" }}>
            {/* 캘린더 들어올 영역 */}
          </div>

          <p className="content-tit">예약자 정보</p>
          <ul className="d-flex" style={{ justifyContent: "space-between" }}>
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
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <p className="time">08:00 ~ 09:00</p>
                <div className="court-choice-list">
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
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="btn-box single">
            <ele.BtnColor>등록</ele.BtnColor>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offline;
