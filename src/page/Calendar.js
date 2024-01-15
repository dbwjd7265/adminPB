import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";

//예약관리 - 예약 스케쥴
const Calendar = () => {
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
        <SidePanel isSidePanelVisible={isSidePanelVisible} openSidePanel={openSidePanel} closeSidePanel={closeSidePanel}/>
        <h1 className="page-title">
          <button onClick={openSidePanel}>
            <box-icon name="menu" color="#8C95A0" size="csssize"></box-icon>
          </button>
          예약 스케쥴
        </h1>
        <div className="content w1100">{/* 캘린더 들어올 영역 */}</div>
      </div>
    </>
  );
};

export default Calendar;
