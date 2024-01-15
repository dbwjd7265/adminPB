import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";

const Stats = () => {
  return (
    <div className="container">
      <h1 className="page-title">현황 및 통계</h1>
      <div className="content w1100">
        <div className="search-box">
          <ul>
            <li>
              <div style={{ width: "calc( 50% - 7px )" }}>
                <p className="content-sub">기간</p>
                <div className="input-box">
                  <select>
                    <option>1개월</option>
                    <option>6개월</option>
                    <option>12개월</option>
                    <option>직접입력</option>
                  </select>
                </div>
              </div>
              <div className="allday" style={{ width: "calc( 50% - 7px )" }}>
                <p className="content-sub">직접입력</p>
                <div className="input-box">
                  <input type="text"></input>
                </div>
              </div>
            </li>
          </ul>
          <div className="btn-box search">
            <ele.BtnWhite>취소</ele.BtnWhite>
            <ele.BtnColor>검색</ele.BtnColor>
          </div>
        </div>
        <p className="content-name">
          시설 상세정보
          <ul className="d-flex list-tab2">
            <li>
              <input type="radio" id="time" name="stats-type"/>
              <label htmlFor="time">시간대</label>
            </li>
            <li>
              <input type="radio" id="today" name="stats-type" />
              <label htmlFor="today">일별</label>
            </li>
            <li>
              <input type="radio" id="month" name="stats-type" />
              <label htmlFor="month">월별</label>
            </li>
            <li>
              <input type="radio" id="year" name="stats-type" />
              <label htmlFor="year">년도</label>
            </li>
          </ul>
        </p>
        <div className="chart-box">
          <div className="chart"></div>
          <ul className="chart-tag">
            <li className="use">이용</li>
            <li className="refund">환불</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Stats;
