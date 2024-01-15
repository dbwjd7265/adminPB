import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";
import { Link } from "react-router-dom";

//예약 스케쥴 - 일일입장/정기권 스케쥴 수정(목록)
const ScheduleList = () => {
  const [selectedType, setSelectedType] = useState("day");

  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const openSidePanel = () => {
    setSidePanelVisible(true);
  };
  const closeSidePanel = () => {
    setSidePanelVisible(false);
  };

  return (
    <>
      <div className="container">
        <SidePanel
          isSidePanelVisible={isSidePanelVisible}
          openSidePanel={openSidePanel}
          closeSidePanel={closeSidePanel}
        />
        <h1 className="page-title">
          <button onClick={openSidePanel}>
            <box-icon name="menu" color="#8C95A0" size="csssize"></box-icon>
          </button>
          일일입장/정기권 관리
        </h1>
        <ul className="d-flex list-tab">
          <li>
            <input
              type="radio"
              id="all"
              name="type"
              checked={selectedType === "day"}
              onChange={() => setSelectedType("day")}
            />
            <label htmlFor="all">일일입장</label>
          </li>
          <li>
            <input
              type="radio"
              id="today"
              name="type"
              checked={selectedType === "regul"}
              onChange={() => setSelectedType("regul")}
            />
            <label htmlFor="today">정기권</label>
          </li>
        </ul>
        <div className="content w1100">
          {selectedType === "day" ? (
            <>
              <div className="search-box">
                <ul>
                  <li>
                    <div style={{ width: "100%" }}>
                      <p className="content-tit">검색어</p>
                      <div className="input-box">
                        <input type="text"></input>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div style={{ width: "calc( 50% - 7px )" }}>
                      <p className="content-tit">일일입장 기간</p>
                      <div className="input-box"></div>
                    </div>
                    <div style={{ width: "calc( 50% - 7px )" }}>
                      <p className="content-tit">등록일</p>
                      <div className="input-box"></div>
                    </div>
                  </li>
                </ul>
                <div className="btn-box search">
                  <ele.BtnWhite>취소</ele.BtnWhite>
                  <ele.BtnColor>검색</ele.BtnColor>
                </div>
              </div>
              <p className="content-name">
                일일입장 목록
                <ele.BtnColor>
                  <Link to="/TicketDayEdit">일일입장 등록</Link>
                </ele.BtnColor>
              </p>
              <ele.ListTable className="table-type2">
                <thead>
                  <tr>
                    <th className="chk" style={{ width: "50px" }}>
                      <input type="checkbox" id="t-all" />
                      <label for="t-all"></label>
                    </th>
                    <th className="time" style={{ width: "250px" }}>
                      일일입장 기간
                    </th>
                    <th className="date" style={{ width: "120px" }}>
                      등록일
                    </th>
                    <th className="sett" style={{ width: "120px" }}>
                      일일입장 설정
                    </th>
                    <th className="write" style={{ width: "150px" }}>
                      등록자
                    </th>
                    <th className="edit"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="chk">
                      <input type="checkbox" id="t-chk1" />
                      <label for="t-chk1"></label>
                    </td>
                    <td className="time">2023.00.00 ~ 2024.00.00</td>
                    <td className="date">2023.00.00</td>
                    <td className="sett">3개</td>
                    <td className="write">master_01</td>
                    <td className="edit">
                      <Link to="/TicketDayEdit" className="btn-text">
                        수정
                      </Link>
                    </td>
                  </tr>
                </tbody>
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
            </>
          ) : (
            <>
              <div className="search-box">
                <ul>
                  <li>
                    <div style={{ width: "calc( 50% - 7px )" }}>
                      <p className="content-tit">검색어</p>
                      <div className="input-box">
                        <input type="text"></input>
                      </div>
                    </div>
                    <div style={{ width: "calc( 50% - 7px )" }}>
                      <p className="content-tit">기간</p>
                      <div className="input-box"></div>
                    </div>
                  </li>
                </ul>
                <div className="btn-box search">
                  <ele.BtnWhite>취소</ele.BtnWhite>
                  <ele.BtnColor>검색</ele.BtnColor>
                </div>
              </div>
              <p className="content-name">
                정기권 목록
                <ele.BtnColor>
                  <Link to="/TicketRegular">정기권 등록</Link>
                </ele.BtnColor>
              </p>
              <ele.ListTable className="table-type2">
                <thead>
                  <tr>
                    <th className="chk" style={{ width: "50px" }}>
                      <input type="checkbox" id="t-all" />
                      <label for="t-all"></label>
                    </th>
                    <th className="time" style={{ width: "250px" }}>
                      일일입장 기간
                    </th>
                    <th className="date" style={{ width: "120px" }}>
                      등록일
                    </th>
                    <th className="sett" style={{ width: "120px" }}>
                      일일입장 설정
                    </th>
                    <th className="write" style={{ width: "150px" }}>
                      등록자
                    </th>
                    <th className="edit"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="chk">
                      <input type="checkbox" id="t-chk1" />
                      <label for="t-chk1"></label>
                    </td>
                    <td className="time">2023.00.00 ~ 2024.00.00</td>
                    <td className="date">2023.00.00</td>
                    <td className="sett">3개</td>
                    <td className="write">master_01</td>
                    <td className="edit">
                      <Link to="/TicketRegular" className="btn-text">
                        수정
                      </Link>
                    </td>
                  </tr>
                </tbody>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ScheduleList;
