import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import "../css/style.css";
import reserimg from "../resources/reser_btns.svg";
import filterimg from "../resources/filterimg.svg";
import calendarimg from "../resources/calendarimg.svg";

const SidePanelStyled = styled.div`
  &.hide {
    width: 0;
    padding: 0;
  }

  &.show {
    width: 350px;
  }

  transition: 0.3s all;
  overflow-y: auto;
  padding: 40px 50px 30px 30px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  position: absolute;
  box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index:19;

  &.hide button.slide {
    display: none;
  }

  button.slide {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    transition: 0.3s all;
    margin-left: auto;
    position: absolute;
    right: 10px;
    top: 40px;
    background-color: #fff;
  }

  &.hide .side-wrap {
    display: none;
  }

  button.slide:hover {
    background-color: #f1f2f2;
  }

  .content-name img {
    margin-right: 10px;
  }

  .reser-btns li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.3s all;
  }

  .reser-btns li a {
    width: calc(100% - 24px);
  }

  .reser-btns li span {
    visibility: hidden;
    width: 24px;
    height: 22px;
  }

  .reser-btns li:hover {
    background-color: #f2f4f8;
  }

  .reser-btns li:hover span {
    visibility: visible;
  }

  .calandar-box {
    width: 100%;
    height: 250px;
    background-color: #efefef;
  }
`;
const SidePanel = ({ isSidePanelVisible, openSidePanel, closeSidePanel }) => {
//   const [isSidePanelVisible, setSidePanelVisible] = useState(true);
//   const openSidePanel = () => {
//     setSidePanelVisible(true);
//   };
//   const closeSidePanel = () => {
//     setSidePanelVisible(false);
//   };

  return (
    <SidePanelStyled className={isSidePanelVisible ? "show" : "hide"}>
      <button className="slide" onClick={closeSidePanel}>
        <box-icon name="x" color="#8C95A0" size="csssize"></box-icon>
      </button>
      <div className="side-wrap">
        <div className="search-box">
          <span className="icon">
            <box-icon name="search" color="#3F444A" size="csssize"></box-icon>
          </span>
          <input type="text"></input>
        </div>

        <p className="content-name">
          <img src={calendarimg} alt="캘린더이미지" class="image" />
          2023년 00월
        </p>
        <div className="calandar-box mb50">{/* 캘린더 영역 */}</div>

        <p className="content-name">
          <img src={filterimg} alt="예약별보기이미지" class="image" />
          예약별 보기
        </p>
        <div className="type-filter mb50">
          <div class="checks type1">
            <input type="checkbox" id="ex_type1" />
            <label for="ex_type1">앱 예약</label>
          </div>
          <div class="checks type3">
            <input type="checkbox" id="ex_type3" />
            <label for="ex_type3">일일입장</label>
          </div>
          <div class="checks type2">
            <input type="checkbox" id="ex_type2" />
            <label for="ex_type2">오프라인 예약</label>
          </div>
          <div class="checks type4">
            <input type="checkbox" id="ex_type4" />
            <label for="ex_type4">정기권</label>
          </div>
          <div class="checks type5">
            <input type="checkbox" id="ex_type5" />
            <label for="ex_type5">정기대관</label>
          </div>
        </div>

        <p className="content-name">
          <img src={reserimg} alt="빠른예약 이미지" class="image" />
          빠른예약 서비스
        </p>
        <ul className="reser-btns">
          <li>
            <Link to="/Offline">오프라인 예약</Link>
            <span>
              <box-icon
                name="chevron-right"
                color="#3F444A"
                size="csssize"
              ></box-icon>
            </span>
          </li>
          <li>
            <Link to="/TicketDayEdit">일일입장 예약</Link>
            <span>
              <box-icon
                name="chevron-right"
                color="#3F444A"
                size="csssize"
              ></box-icon>
            </span>
          </li>
          <li>
            <Link to="/TicketRegular">정기권</Link>
            <span>
              <box-icon
                name="chevron-right"
                color="#3F444A"
                size="csssize"
              ></box-icon>
            </span>
          </li>
          <li>
            <Link to="/Regular">정기대관</Link>
            <span>
              <box-icon
                name="chevron-right"
                color="#3F444A"
                size="csssize"
              ></box-icon>
            </span>
          </li>
          <li>
            <Link to="/TicketList">일일입장/정기권 스케쥴 수정</Link>
          </li>
        </ul>
      </div>
    </SidePanelStyled>
  );
};

export default SidePanel;
