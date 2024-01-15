import "../css/style.css";
import styled, { css } from "styled-components";

const startTime = 0; // 00:00
const endTime = 23 + 59 / 60; // 23시 59분
const timeOptions = [];

for (let time = startTime; time <= endTime; time += 0.5) {
  const hours = Math.floor(time);
  const minutes = (time % 1) * 60;
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  timeOptions.push(
    <option key={time} value={time}>
      {formattedTime}
    </option>
  );
}

const GymTime = styled.ul`
  width: 100%;
  background-color: #f5f7f9;
  padding: 25px;
  border-radius: 5px;

  li {
    display: flex;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  li .days-name {
    width: 120px;
  }

  li .days-time {
    width: calc(100% - 120px);
  }

  li .days-time .gym-time:first-child > div {
    margin-top: 0;
  }

  li .days-time .input-box {
    padding: 15px 0;
  }

  li .days-time .input-box input[type="text"] {
    width: calc(100% - 25px);
  }

  .gym-time {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gym-time > div {
    width: calc(50% - 25px);
    margin-top: 15px;
  }

  .gym-time div.price .input-box {
    display: flex;
  }

  .gym-time div.price .input-box input {
    margin-right: 10px;
    border-bottom: 1px solid #e0e0e0;
  }

  .gym-time div.price .input-box span {
    text-align: center;
  }
`;

export const TimeRange = ({ period, dayType }) => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const renderTimeSlot = (timeType) => (
    <div className="gym-time">
      <div className="time">
        <p className="content-sub">{timeType}</p>
        <div className="input-box">
          <select>{timeOptions}</select>
          <span>~</span>
          <select>{timeOptions}</select>
        </div>
      </div>
      <div className="price">
        <p className="content-sub">대여비</p>
        <div className="input-box">
          <input type="text"></input>
          <span>원</span>
        </div>
      </div>
    </div>
  );

  return (
    <GymTime>
      {dayType.map((day, index) => (
        <li key={index}>
          <p className="days-name">{day}</p>
          <div className="days-time">
            {period.map((time) => renderTimeSlot(time))}
          </div>
        </li>
      ))}
    </GymTime>
  );
};

export const RestTimeItem = ({ index }) => {
  return (
    <>
      <p>휴게시간{index}</p>
      <div>
        <select>{timeOptions}</select>
        <span>~</span>
        <select>{timeOptions}</select>
      </div>
    </>
  );
};
