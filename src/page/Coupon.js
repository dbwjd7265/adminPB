import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";

const Coupon = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);
  const handleButtonClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  const openPopup = (popup) => {
    setPopupVisible(true);
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedPopup(null);
  };

  const popCoupon = () => {
    if (selectedPopup !== "pop-coupon") {
      closePopup();
      openPopup("pop-coupon");
    } else {
      closePopup();
    }
  };

  const popClose = () => {
    closePopup();
  };

  return (
    <>
      <div className="container">
        <h1 className="page-title">할인쿠폰 관리</h1>
        <div className="content w1100">
          <p className="content-name">
            쿠폰 리스트
            <ele.BtnColor onClick={popCoupon}>쿠폰 등록</ele.BtnColor>
          </p>
          <ele.ListTable className="coupon-table">
            <tr>
              <th className="no">NO</th>
              <th className="coupon-name">쿠폰명</th>
              <th className="dis">할인률</th>
              <th className="use">사용기간</th>
              <th className="state">상태</th>
              <th className="write">등록자</th>
              <th className="date">등록일</th>
              <th className="btn"></th>
            </tr>

            <tr>
              <td className="no">1</td>
              <td className="coupon-name">
                딱플 스페셜 콜라보 이벤트 특별 쿠폰
              </td>
              <td className="dis">5,000원</td>
              <td className="use">23.00.00 ~ 23.00.00</td>
              <td className="state">미출력(1/10)</td>
              <td className="write">master_01</td>
              <td className="date">23.00.00</td>
              <td className="btn">
                <button className="btn-text" onClick={popCoupon}>
                  수정
                </button>
              </td>
            </tr>
            <tr>
              <td className="no">2</td>
              <td className="coupon-name">딱플 오픈 이벤트</td>
              <td className="dis">10%</td>
              <td className="use">23.00.00 ~ 23.00.00</td>
              <td className="state">출력(1/10)</td>
              <td className="write">master_01</td>
              <td className="date">23.00.00</td>
              <td className="btn">
                <button className="btn-text" onClick={popCoupon}>
                  수정
                </button>
              </td>
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
      {/* 팝업 */}
      <ele.Popup isVisible={isPopupVisible} width="600">
        <div className="dimd"></div>
        <div className="pop-box pop-coupon">
          <p className="content-name">
            쿠폰등록 및 수정
            <ele.BtnClose onClick={popClose}>닫기</ele.BtnClose>
          </p>
          <p className="content-tit">쿠폰 출력</p>
          <div className="input-box">
            <ul className="center-res">
              <li className="checks">
                <input type="radio" id="show" name="cp-show" />
                <label for="show">출력</label>
              </li>
              <li className="checks">
                <input type="radio" id="hidden" name="cp-show" />
                <label for="hidden">숨기기</label>
              </li>
            </ul>
          </div>

          <p className="content-tit">쿠폰명</p>
          <div className="input-box">
            <input type="text"></input>
          </div>

          <p className="content-tit">쿠폰설명</p>
          <div className="input-box">
            <input type="text"></input>
          </div>

          <p className="content-tit">쿠폰 발행수량</p>
          <ul className="d-flex" style={{ justifyContent: "space-between" }}>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">제한 유무</p>
              <div className="input-box">
                <ul className="center-res">
                  <li className="checks">
                    <input type="radio" id="limit" name="limit" />
                    <label for="limit">제한</label>
                  </li>
                  <li className="checks">
                    <input type="radio" id="unlimit" name="limit" />
                    <label for="unlimit">무제한</label>
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">수량</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
          </ul>

          <p className="content-tit">쿠폰 사용기간</p>
          <ul className="d-flex" style={{ justifyContent: "space-between" }}>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">사용시작</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">사용종료</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
          </ul>

          <p className="content-tit">할인율</p>
          <ul className="d-flex" style={{ justifyContent: "space-between" }}>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">단위</p>
              <div className="input-box">
                <ul className="center-res">
                  <li className="checks">
                    <input type="radio" id="won" name="disc" />
                    <label for="won">원</label>
                  </li>
                  <li className="checks">
                    <input type="radio" id="perc" name="disc" />
                    <label for="perc">퍼센트(%)</label>
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">세부단위</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
          </ul>
          <div className="btn-box">
            <ele.BtnWhite onClick={popClose}>취소</ele.BtnWhite>
            <ele.BtnColor>저장</ele.BtnColor>
          </div>
        </div>
      </ele.Popup>
    </>
  );
};

export default Coupon;
