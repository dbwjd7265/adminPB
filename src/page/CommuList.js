import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import * as ele from "../components/element";

const CommuList = () => {
  return (
    <>
      <div className="container">
        <h1 className="page-title">커뮤니티</h1>
        <div className="content w1100">
          <ele.ListTable className="qna-table ">
            <tr>
              <th className="num">NO</th>
              <th className="title">제목</th>
              <th className="write">작성자</th>
              <th className="date">작성일</th>
            </tr>
            <tr>
              <td className="num">00</td>
              <td className="title"><Link to='../CommuBoard'>제 1회 딱플 전국 오픈배 경기 운영 방식 안내</Link></td>
              <td className="write">관리자</td>
              <td className="date">2023.00.00</td>
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

export default CommuList;
