import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";
import SidePanel from "../components/sidePanel";
import succ from "../resources/success.png";
import fail from "../resources/fail.png";

//정기권 등록 및 수정

const TicketRegular = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);
  
  const openPopup = (popup) => {
    setPopupVisible(true);
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedPopup(null);
  };

  const popCoupon = () => {
    if (selectedPopup !== "pop-ticket") {
      closePopup();
      openPopup("pop-ticket");
    } else {
      closePopup();
    }
  };

  const popClose = () => {
    closePopup();
  };

  //사이드 
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

        {/* 본문 */}
        <h1 className="page-title">
        <button onClick={openSidePanel}>
            <box-icon name="menu" color="#8C95A0" size="csssize"></box-icon>
          </button>
          정기권 관리</h1>
        <div className="content w1100">
          <p className="content-name">정기권 등록 및 수정</p>
          <p className="content-tit">정기권 사용기간</p>
          <ul className="d-flex" style={{ justifyContent: "space-between" }}>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">시작일</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
            <li style={{ width: "calc( 50% - 10px )" }}>
              <p className="content-sub">종료일</p>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
          </ul>

          <p className="content-tit">정기권 설정 코트 선택</p>
          <div className="input-box d-flex">
            <div className="checks">
              <input type="checkbox" id="c1" />
              <label for="c1">1코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c2" />
              <label for="c2">2코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c3" />
              <label for="c3">3코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c4" />
              <label for="c4">4코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c5" />
              <label for="c5">5코트 : 6명</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="c6" />
              <label for="c6">6코트 : 6명</label>
            </div>
          </div>

          <p className="content-tit">정기권 종류 (택 1)</p>
          <div className="input-box">
            <select>
              <option>평일 오전</option>
              <option>평일 오후</option>
              <option>평일 야간</option>
              <option>주말 오전</option>
              <option>주말 오후</option>
              <option>주말 야간</option>
              <option>전체 오전</option>
              <option>전체 오후</option>
              <option>전체 야간</option>
            </select>
          </div>

          <p className="content-tit">가격</p>
          <p className="content-sub">기본 가격</p>
          <div className="input-box d-flex">
            <input type="text" style={{ width: "calc( 100% - 50px )" }}></input>
            <span>원</span>
          </div>

          <p className="content-sub" style={{ marginTop: "20px" }}>
            할인 가격
          </p>
          <ul className="center-res">
            <li className="checks">
              <input type="radio" id="show" name="cp-show" />
              <label for="show">할인 설정</label>
            </li>
            <li className="checks">
              <input type="radio" id="hidden" name="cp-show" />
              <label for="hidden">할인 미설정</label>
            </li>
          </ul>
          <ul className="d-flex input-flex">
            <li style={{ width: "calc( 65% - 10px )" }}>
              <div className="input-box">
                <input type="text"></input>
              </div>
            </li>
            <li style={{ width: "calc( 35% - 10px )" }}>
              <div className="input-box">
                <select>
                  <option>원</option>
                  <option>% (퍼센트)</option>
                </select>
              </div>
            </li>
          </ul>
          <p className="content-sub">
            약 <strong style={{color:'#0f62fe'}}>1,000</strong>원 할인
          </p>
          <div className="line"></div>

          <p className="content-sub">최종 판매 금액</p>
          <div className="input-box d-flex">
            <input type="text" style={{ width: "calc( 100% - 50px )" }}></input>
            <span>원</span>
          </div>
          <div className="btn-box total">
            <ele.BtnWhite onClick={popClose}>취소</ele.BtnWhite>
            <ele.BtnColor>저장</ele.BtnColor>
          </div>
          
        </div>
      </div>

      {/* 정기권 등록 팝업 */}
      <ele.Popup isVisible={isPopupVisible} width="600">
        <div className="dimd"></div>

        {/* 등록 성공 */}
        <div className="pop-box pop-success" style={{ display: "none" }}>
          <div className="pop-img">
            <img src={succ} alt="성공아이콘" />
          </div>
          <p className="content-name">정기권 등록 등록완료</p>
          <div className="btn-box">
            <ele.BtnColor onClick={popClose} style={{ width: "100%" }}>
              확인
            </ele.BtnColor>
          </div>
        </div>

        {/* 등록 실패 */}
        <div className="pop-box pop-fail" style={{ display: "none" }}>
          <div className="pop-img">
            <img src={fail} alt="실패아이콘" />
          </div>
          <p className="content-name"> 정기권 등록 불가</p>
          <p className="content-sub">이미 등록된 예약 정보가 있습니다.</p>
          <div className="btn-box">
            <ele.BtnColor onClick={popClose} style={{ backgroundColor: "#D92D20", width: "100%" }}>
              확인
            </ele.BtnColor>
          </div>
        </div>
      </ele.Popup>
    </>
  );
};

export default TicketRegular;
