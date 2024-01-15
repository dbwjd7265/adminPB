import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./css/reset.css";
import "./App.css";
import * as Nav from "./components/nav"; //공통nav
import Home from "./page/Home"; // Home 컴포넌트 import
import Center from "./page/Center"; //내 시설 정보
import Manager from "./page/Manager"; //매니저 관리
import Coupon from "./page/Coupon"; //할인쿠폰 관리
import ScheduleList from "./page/ScheduleList"; //예약관리 : 예약 리스트
import ScheduleStats from "./page/ScheduleStats"; //예약 현황
import Stats from "./page/Stats"; //현황 및 통계
import QnABoard from "./page/QnABoard"; //큐앤에이 보드
import QnAList from "./page/QnAList"; //큐엔에이 리스트
import CommuList from "./page/CommuList"; //커뮤니티 리스트
import CommuBoard from "./page/CommuBoard"; //커뮤니티 보드
import TicketSet from "./page/TicketSet"; 
import Calendar from "./page/Calendar"; //예약관리 : 예약 스케쥴
import Offline from "./page/Offline"; //예약관리 : 예약 스케쥴 : 오프라인
import Regular from "./page/Regular"; //예약관리 : 예약 스케쥴 : 정기대관
import RegularEdit from "./page/RegularEdit"; //예약관리 : 예약 스케쥴 : 정기대관 : 등록 및 수정
import TicketList from "./page/TicketList"; //예약관리 : 예약 스케쥴 : 일일입장/정기권 수정
import TicketDayEdit from "./page/TicketDayEdit"; //예약관리 : 예약 스케쥴 : 일일입장 : 등록 및 수정
import TicketRegular from "./page/TicketRegular"; //예약관리 : 예약 스케쥴 : 정기권 : 등록 및 수정
import 'boxicons' //아이콘

function App() {
  return (
    <div className="App">
      <div className="layout__sidebar">
        <Nav.Nav />{/* Nav 컴포넌트 */}
      </div>
      
      <div className="wrap">
        <Nav.Header />
        <section style={{width:'100%'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Center" element={<Center />}/>
            <Route path="/Manager" element={<Manager />}/>
            <Route path="/Coupon" element={<Coupon />}/>
            <Route path="/ScheduleList" element={<ScheduleList />}/>
            <Route path="/ScheduleStats" element={<ScheduleStats />}/>
            <Route path="/Stats" element={<Stats />}/>
            <Route path="/QnABoard" element={<QnABoard />}/>
            <Route path="/QnAList" element={<QnAList />}/>
            <Route path="/CommuList" element={<CommuList />}/>
            <Route path="/CommuBoard" element={<CommuBoard />}/>
            <Route path="/TicketSet" element={<TicketSet />}/>
            <Route path="/Calendar" element={<Calendar />}/>
            <Route path="/Offline" element={<Offline />}/>
            <Route path="/Regular" element={<Regular />}/>
            <Route path="/RegularEdit" element={<RegularEdit />}/>
            <Route path="/TicketList" element={<TicketList />}/>
            <Route path="/TicketDayEdit" element={<TicketDayEdit />}/>
            <Route path="/TicketRegular" element={<TicketRegular />}/>
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;