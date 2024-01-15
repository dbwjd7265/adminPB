import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";

//예약관리 - 정기대관 수정
const RegularEdit = () => {
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
          <p class="content-name">정기대관 예약 수정</p>
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
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">정기대관 기간</p>
              <div className="input-box">
                2024.00.00 ~ 2024.00.00
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">코트</p>
              <div className="input-box">
              1코트, 2코트, 3코트, 4코트, 5코트
              </div>
            </li>
          </ul>
          <div className="btn-box search" style={{borderBottom:'none'}}>
            <ele.BtnColor>수정</ele.BtnColor>
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
                <th className="or">삭제 가능 여부</th>
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
            <ele.BtnColor>삭제</ele.BtnColor>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegularEdit;
