// 공통 nav
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import "../css/style.css";
import logo from '../resources/logo.svg';

{/* 네비 nav */}
const NavItem = styled.div`
  border-radius: 10px;
  padding: 15px;

  &.on {
    background-color: #653ffb;
    color: #ffffff;
  }

  p, a {
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
  }

  &.on p,
  &.on a {
    color: #ffffff;
    font-weight: bold;
  }

  span.icon {
    width: 20px;
    height: 20px;
  }

  span.icon:first-child {
    margin-right: 10px;
  }

  span.bage {
    background-color: #a68fff;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 5px;
  }

  .sub-nav {
    transition: 0.3s ease;
    padding-top: 10px;
    padding-bottom: 15px;
    border-top: 1px solid #a68fff;
    margin-top: 15px;

    display: none;
  }

  &.on .sub-nav {
    display: block;
  }

  .sub-nav li {
    padding-left: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;

    &:hover {
      color: #fff;
    }
  }

  .sub-nav li a {
    color: #a68fff;
    font-size: 16px;
  }

  .sub-nav li a:hover {
    color: #fff;
  }
  .sub-nav li a.on {
    color:#fff;
  }

  .sub-nav li span.bage {
    width: 30px;
    border-radius: 20px;
  }
`;

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (nav) => {
    setActiveNav(nav === activeNav ? "" : nav);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link === activeLink ? "" : link);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="딱플레이로고" />
      </div>
      <NavItem className={activeNav === "home" ? "on" : ""}>
        <Link to='/' onClick={() => handleNavClick("home")}>
          <span className={`icon ${activeNav === "home" ? "on" : ""}`}>
              <box-icon name='home' type="solid" 
              color={activeNav === "home" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          관리 홈
          <span className="bage">N</span>
        </Link>
      </NavItem>

      <NavItem className={activeNav === "center" ? "on" : ""}>
        <p onClick={() => handleNavClick("center")}>
          <span className={`icon ${activeNav === "center" ? "on" : ""}`}>
              <box-icon name='building' type="solid" 
              color={activeNav === "center" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          내 시설 관리
          <span className="bage">N</span>
          <span className="icon">
            <box-icon name={activeNav === "center" ? 'chevron-down' : 'chevron-up'} color='#A68FFF' size="csssize"></box-icon>
          </span>
        </p>
        <ul className={`sub-nav ${activeNav === "center" ? "on" : ""}`}>
          <li>
            <Link to='/Center' onClick={() => handleLinkClick("center-link1")}
              className={activeLink === "center-link1" ? "on" : ""}>내 시설 정보</Link>
              <span className="bage">99+</span>
          </li>
          <li>
            <Link to='/Manager' onClick={() => handleLinkClick("center-link2")}
              className={activeLink === "center-link2" ? "on" : ""}>매니저 관리</Link>
              <span className="bage">99+</span>
          </li>
          <li>
            <Link to='/Coupon' onClick={() => handleLinkClick("center-link3")}
              className={activeLink === "center-link3" ? "on" : ""}>할인쿠폰 관리</Link>
              <span className="bage">99+</span>
          </li>
        </ul>
      </NavItem>
      
      <NavItem className={activeNav === "time" ? "on" : ""}>
        <p onClick={() => handleNavClick("time")}>
          <span className={`icon ${activeNav === "time" ? "on" : ""}`}>
              <box-icon name='time-five' type="solid" 
              color={activeNav === "time" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          예약 관리
          <span className="bage">N</span>
          <span className="icon">
            <box-icon name={activeNav === "time" ? 'chevron-down' : 'chevron-up'} color='#A68FFF' size="csssize"></box-icon>
          </span>
        </p>
        <ul className={`sub-nav ${activeNav === "time" ? "on" : ""}`}>
          <li>
            <Link to='/Calendar' onClick={() => handleLinkClick("time1")}
              className={activeLink === "time1" ? "on" : ""}>예약 스케쥴</Link>
              <span className="bage">99+</span>
          </li>
          <li>
            <Link to='/ScheduleList' onClick={() => handleLinkClick("time2")}
              className={activeLink === "time2" ? "on" : ""}>예약 리스트</Link>
              <span className="bage">99+</span>
          </li>
          <li>
            <Link to='/TicketSet' onClick={() => handleLinkClick("ticket")}
              className={activeLink === "ticket" ? "on" : ""}>정기권 관리(임시)</Link>
              <span className="bage">99+</span>
          </li>
        </ul>
      </NavItem>
      <NavItem className={activeNav === "schedul" ? "on" : ""}>
        <Link to='/ScheduleStats' onClick={() => handleNavClick("schedul")}>
          <span className={`icon ${activeNav === "schedul" ? "on" : ""}`}>
              <box-icon name='book' type="solid" 
              color={activeNav === "schedul" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          예약 현황
          <span className="bage">N</span>
        </Link>
      </NavItem>
      <NavItem className={activeNav === "stats" ? "on" : ""}>
        <Link to='/Stats' onClick={() => handleNavClick("stats")}>
          <span className={`icon ${activeNav === "stats" ? "on" : ""}`}>
              <box-icon name='chart' type="solid" 
              color={activeNav === "stats" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          현황 및 통계
          <span className="bage">N</span>
        </Link>
      </NavItem>
      <NavItem className={activeNav === "qna" ? "on" : ""}>
        <Link to='/QnAList' onClick={() => handleNavClick("qna")}>
          <span className={`icon ${activeNav === "qna" ? "on" : ""}`}>
              <box-icon name='question-mark' type="solid" 
              color={activeNav === "qna" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          Q&A
          <span className="bage">N</span>
        </Link>
      </NavItem>
      <NavItem className={activeNav === "commu" ? "on" : ""}>
        <Link to='/CommuList' onClick={() => handleNavClick("commu")}>
          <span className={`icon ${activeNav === "commu" ? "on" : ""}`}>
              <box-icon name='conversation' type="solid" 
              color={activeNav === "commu" ? '#fff' : '#3F444A'} size="csssize" ></box-icon>
          </span>
          커뮤니티
          <span className="bage">N</span>
        </Link>
      </NavItem>
      <div className="logout">
        <button className="logout">
          <span className="icon">
            <box-icon name='log-out' color='#8E8E93' size='csssize'></box-icon>
          </span>
          로그아웃
        </button>
      </div>
    </nav>
  );
};


{/* 헤더 header */}
const HeaderItem = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 999;
  position: sticky;
  top: 0;
  right: 0;
  background-color: #f4f5f7;
  padding: 15px 0;

  .alarm {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
  .profile {
    width: 45px;
    height: 45px;
  }

  .profile img {
    width: 100%;
    border-radius: 50%;
  }

  .alarm-pop {
    background: #fff;
    position: absolute;
    top: 40px;
    right: 60px;
    z-index: 1000;
    padding: 20px;
    border-radius: 7px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.3);
    visibility: hidden;
    opacity:0;
    transition: .3s ease-out;
  }

  .alarm-pop.show {
    top:60px;
    opacity:1;
    visibility: visible;
  }

  .alarm-pop ul {
    margin-top: 10px;
  }

  .alarm-pop ul li:first-child {
    border-top: 1px solid #eee;
  }

  .alarm-pop ul li {
    border-bottom: 1px solid #eee;
    padding:10px 5px;
    width: 250px;
  }

  .alarm-pop ul li a {
    display:block;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const Header = () => {
  const [showAlarmPop, setShowAlarmPop] = useState(false);

  const toggleAlarmPop = () => {
    setShowAlarmPop(!showAlarmPop);
  };

  
  return (
    <HeaderItem >
      <div className="alarm" onClick={toggleAlarmPop}>
        <box-icon type='solid' name='bell' size='csssize' color='#3F444A'></box-icon>
      </div>
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="" />
      </div>
      <div className={`alarm-pop ${showAlarmPop ? 'show' : ''}`}>
      <p>알림</p>
      <ul>
        <li>
          <Link>공지사항이 등록 되었습니다. 공지사항이 등록 되었습니다.</Link>
        </li>
        <li>
          <Link>QnA가 등록되었습니다.</Link>
        </li>
        <li>
          <Link>QnA가 등록되었습니다.</Link>
        </li>
      </ul>
    </div>
    </HeaderItem>
  );
}
