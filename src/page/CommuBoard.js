import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import * as ele from "../components/element";

const CommuBoard = () => {
  return (
    <>
      <div className="container qna">
        <h1 className="page-title">커뮤니티</h1>
        <div className="content w1100 board">
          <p className="content-name">
            제 1회 딱플 전국 오픈배 경기 운영 방식 안내
          </p>
          <div className="write-user">
            <div className="img">
              <img src="https://via.placeholder.com/50" alt="" />
            </div>
            <div className="">
              <p className="name">관리자 작성</p>
              <p>
                <span>2023.00.00</span>
                <span>조회 199</span>
              </p>
            </div>
          </div>
          <div className="input-box">
            대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며,
            선전포고와 강화를 한다. 이 헌법은 1988년 2월 25일부터 시행한다.
            다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에
            의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이
            헌법시행 전에 할 수 있다.
          </div>
          <div className="reply-box">
            <p className="content-name">댓글 2</p>
            <ul>
              <li>
                <div className="write-user">
                  <div className="img">
                    <img src="https://via.placeholder.com/50" alt="" />
                  </div>
                  <div className="">
                    <p className="name">master_01</p>
                    <p>
                      공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을
                      진다.
                    </p>
                  </div>
                </div>
                <div className="rere">
                  <div className="icon">
                    <box-icon
                      name="reply"
                      rotate="180"
                      size="csssize"
                    ></box-icon>
                  </div>
                  <div className="write-user">
                    <div className="img">
                      <img src="https://via.placeholder.com/50" alt="" />
                    </div>
                    <div className="">
                      <p className="name">master_394839</p>
                      <p>대댓글</p>
                    </div>
                  </div>
                </div>
                <div className="rere">
                  <div className="icon">
                    <box-icon
                      name="reply"
                      rotate="180"
                      size="csssize"
                    ></box-icon>
                  </div>
                  <div className="write-user">
                    <div className="img">
                      <img src="https://via.placeholder.com/50" alt="" />
                    </div>
                    <div className="">
                      <p className="name">master_394839</p>
                      <p>대댓글</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="write-user">
                  <div className="img">
                    <img src="https://via.placeholder.com/50" alt="" />
                  </div>
                  <div className="">
                    <p className="name">master_01</p>
                    <p>
                      공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을
                      진다.
                    </p>
                  </div>
                </div>
                <div className="rere">
                  <div className="icon">
                    <box-icon
                      name="reply"
                      rotate="180"
                      size="csssize"
                    ></box-icon>
                  </div>
                  <div className="write-user">
                    <div className="img">
                      <img src="https://via.placeholder.com/50" alt="" />
                    </div>
                    <div className="">
                      <p className="name">master_394839</p>
                      <p>대댓글</p>
                    </div>
                  </div>
                </div>
                <div className="rere">
                  <div className="icon">
                    <box-icon
                      name="reply"
                      rotate="180"
                      size="csssize"
                    ></box-icon>
                  </div>
                  <div className="write-user">
                    <div className="img">
                      <img src="https://via.placeholder.com/50" alt="" />
                    </div>
                    <div className="">
                      <p className="name">master_394839</p>
                      <p>대댓글</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="reply-write">
            <div className="reply-write-box">
              <p className="id">tester_user</p>
              <textarea
                cols="30"
                rows="3"
                placeholder="댓글을 남겨주세요."
              ></textarea>
              <div className="btn-box">
                <ele.BtnColor>등록</ele.BtnColor>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box board-btn">
          <ele.BtnWhite>목록</ele.BtnWhite>
        </div>
      </div>
    </>
  );
};

export default CommuBoard;
