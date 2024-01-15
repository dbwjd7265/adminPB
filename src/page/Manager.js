import React, { useEffect, useState } from "react";
import "../css/style.css";
import * as ele from "../components/element";

const Manager = () => {
  return (
    <div className="container">
      <h1 className="page-title"> 매니저 관리 </h1>
      <div className="content w1100">
        <p className="content-name">매니저 등록</p>
        <p className="content-sub">회원 전화번호</p>
        <div className="d-flex manager">
          <div className="input-box">
            <input type="text"></input>
          </div>
          <ele.BtnColor style={{ width: "180px" }}>등록</ele.BtnColor>
        </div>

        <div className="main-manager">
          <p>최고 관리자</p>
          <ele.ListTable className="manager-table">
            <tr>
              <td style={{ width: "80px" }}>
                <img src="https://via.placeholder.com/150" alt="샘플이미지" />
              </td>
              <td>
                <p className="black">홍길동</p>
                <p className="gray">ddackple_master@gmail.com</p>
              </td>
            </tr>
          </ele.ListTable>
        </div>
        <div className="sub-manager">
          <p>매니저</p>
          <ele.ListTable className="manager-table">
            <tr>
              <td style={{ width: "80px" }}>
                <img src="https://via.placeholder.com/150" alt="샘플이미지" />
              </td>
              <td>
                <p className="black">홍길동</p>
                <p className="gray">ddackple_master@gmail.com</p>
              </td>
              <td style={{ width: "150px" }}>
                <p className="black">SNS전송</p>
                <p className="gray">010-0000-0000</p>
              </td>
              <td class="onoff">
                <input type="checkbox" id="switch" />
                <label for="switch" class="switch_label">
                  <span class="onf_btn"></span>
                </label>
              </td>
              <td className="delet">
                <button>
                  <box-icon
                    name="trash-alt"
                    type="solid"
                    color="#3F444A"
                    size="csssize"
                  ></box-icon>
                </button>
              </td>
            </tr>
          </ele.ListTable>
        </div>
      </div>
    </div>
  );
};

export default Manager;
