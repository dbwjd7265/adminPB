import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/style.css";
import * as ele from "../components/element";

{
  /* 관리 홈 대시보드 */
}
const Home = () => {
  return (
    <div className="main container">
      <div className="right">
        {/* 광고, 프로필, 예약 현황 */}
        <div className="ad-box">
          <span className="bage">AD</span>
        </div>
        <div className="profile">
          <p className="content-name">프로필</p>
          <div className="img">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <p className="txt1">
            <span>딱플_관리자</span>님
          </p>
          <p className="txt2">ddackple_master@gmail.com</p>
        </div>
        <div className="state">
          <p className="content-name">예약현황</p>
          <div className="gray-box">
            <div className="icon">
              <box-icon name="bar-chart" color="#01C851" size="lg"></box-icon>
            </div>
            <div className="cnt">999+</div>
            <div className="grow">
              예약완료
              <div className="bage up">증가</div>
            </div>
          </div>
          <div className="gray-box">
            <div className="icon">
              <box-icon name="bar-chart" color="#FF0049" size="lg"></box-icon>
            </div>
            <div className="cnt">999+</div>
            <div className="grow">
              예약취소
              <div className="bage miu">증가</div>
            </div>
          </div>
          <button className="reload">
            00:00 실시간 현황
            <span>
              <box-icon
                name="revision"
                animation="spin-hover"
                color="#653FFB"
                size="csssize"
              ></box-icon>
            </span>
          </button>
        </div>
      </div>
      <div className="left">
        {/* 서비스 바로가기 */}
        <section className="link">
          <p className="content-name">서비스 바로가기</p>
          <ul>
            <li>
              <span className="link-icon"></span>
              딱플레이 서비스
              <button>
                바로가기
                <span className="icon">
                  <box-icon
                    name="link-external"
                    color="#653FFB"
                    size="csssize"
                  ></box-icon>
                </span>
              </button>
            </li>
            <li>
              <span className="link-icon"></span>
              인스타그램
              <button>
                바로가기
                <span className="icon">
                  <box-icon
                    name="link-external"
                    color="#653FFB"
                    size="csssize"
                  ></box-icon>
                </span>
              </button>
            </li>
            <li>
              <span className="link-icon"></span>
              유튜브
              <button>
                바로가기
                <span className="icon">
                  <box-icon
                    name="link-external"
                    color="#653FFB"
                    size="csssize"
                  ></box-icon>
                </span>
              </button>
            </li>
            <li>
              <span className="link-icon"></span>
              블로그
              <button>
                바로가기
                <span className="icon">
                  <box-icon
                    name="link-external"
                    color="#653FFB"
                    size="csssize"
                  ></box-icon>
                </span>
              </button>
            </li>
          </ul>
        </section>

        {/* 최근 후기내역 */}
        <section className="review">
          <p className="content-name">
            최근 후기내역
            <ele.linkTo to="">더보기</ele.linkTo>
          </p>
          <ele.ListTable className="main-table">
            <tr>
              <th className="name">이름</th>
              <th className="text">내용</th>
              <th className="date">날짜</th>
            </tr>
            <tr>
              <td className="name">김철수</td>
              <td className="text">
                시설이 깨끗하고 사용하기 편한 위치에 있어요.
              </td>
              <td className="date">2023.00.00</td>
            </tr>
            <tr>
              <td className="name">김철수</td>
              <td className="text">
                시설이 깨끗하고 사용하기 편한 위치에 있어요.
              </td>
              <td className="date">2023.00.00</td>
            </tr>
            <tr>
              <td className="name">김철수</td>
              <td className="text">
                시설이 깨끗하고 사용하기 편한 위치에 있어요.
              </td>
              <td className="date">2023.00.00</td>
            </tr>
            <tr>
              <td className="name">김철수</td>
              <td className="text">
                시설이 깨끗하고 사용하기 편한 위치에 있어요.
              </td>
              <td className="date">2023.00.00</td>
            </tr>
          </ele.ListTable>
        </section>

        {/* 예약 현황 리스트 */}
        <section className="list">
          <p className="content-name">
            예약 현황 리스트
            <ele.linkTo to="">더보기</ele.linkTo>
          </p>
          <ele.ListTable className="main-table">
            <tr>
              <th className="name">예약자</th>
              <th className="date">예약일</th>
              <th className="text">예약정보</th>
              <th className="type">예약타입</th>
              <th className="price">결제금액(결제방식)</th>
            </tr>

            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td className="name">김철수</td>
                <td className="date">2023.00.00</td>
                <td className="text">
                  1코트 | 08:00 ~ 10:00 / 2코트 | 09:00 ~ 10:00
                </td>
                <td className="type">오프라인 예약</td>
                <td className="price">200,000원(무통장입금)</td>
              </tr>
            ))}
          </ele.ListTable>
        </section>
      </div>
    </div>
  );
};

export default Home;
