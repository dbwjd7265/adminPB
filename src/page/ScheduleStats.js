import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";

//예약현황
const ScheduleStats = () => {
  return (
    <>
      <div className="container">
        <h1 className="page-title">예약 현황</h1>
        <div className="content w1100">
          <div className="search-box">
            <ul>
              <li>
                <div style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">예약일</p>
                  <div className="input-box"></div>
                </div>
                <div style={{ width: "calc( 25% - 7px )" }}>
                  <p className="content-tit">예약횟수</p>
                  <div className="input-box">
                  <input type="text"></input>
                  </div>
                </div>
                <div style={{ width: "calc( 25% - 7px )" }}>
                  <p className="content-tit">예약금액</p>
                  <div className="input-box">
                  <input type="text"></input>
                  </div>
                </div>
              </li>
              <li>
                <div style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">이름</p>
                  <div className="input-box">
                    <input type="text">
                      
                    </input>
                  </div>
                </div>
                <div className="allday" style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">아이디</p>
                  <div className="input-box">
                    <input type="text"></input>
                  </div>
                </div>
              </li>
              <li>
                <div style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">전화번호</p>
                  <div className="input-box">
                    <input type="text"></input>
                  </div>
                </div>
                <div className="allday" style={{ width: "calc( 50% - 7px )" }}>
                  <p className="content-tit">이메일</p>
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
          <p className="content-name">예약 현황</p>
          <ele.ListTable className="stats-table ">
            <tr>
              <th className="pay-no">주문번호</th>
              <th className="name">예약자</th>
              <th className="phone">전화번호</th>
              <th className="email">이메일</th>
              <th className="cnt">예약횟수</th>
              <th className="lastdate">마지막 예약일</th>
              <th className="price">총 결제금액</th>
            </tr>

            <tr>
              <td className="pay-no">2309010932452</td>
              <td className="name">홍길동</td>
              <td className="pay-no">010-0000-0000</td>
              <td className="email">daakple1234@gmail.com</td>
              <td className="cnt">000회</td>
              <td className="lastdate">2023.00.00</td>
              <td className="price">999,999원</td>
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
    </>
  );
};

export default ScheduleStats;
