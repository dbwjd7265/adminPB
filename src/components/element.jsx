import "../css/style.css";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ListTable = styled.table`
  width: 100%;
  text-align: left;
  table-layout: fixed;

  tr {
    border-top: 1px solid #e0e0e0;
    width: 100%;
  }

  tr:last-child {
    border-bottom: 1px solid #e0e0e0;
  }

  th,
  td {
    padding: 10px 5px;
    font-size: 14px;
  }

  th {
    color: #000;
  }

  .name,
  .date {
    width: 100px;
  }

  .type {
    width: 130px;
  }

  .price {
    width: 200px;
  }

  td {
    color: #3f444a;
  }

  td.text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const linkTo = styled(Link)`
  margin-left: auto;
  color: #653ffb;
  font-size: 14px;
  padding-right: 10px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 38px;
    height: 1px;
    background-color: #653ffb;
  }

  &::after {
    content: "+";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const BtnColor = styled.button`
  border: none;
  background-color: #653ffb;
  color: #fff;
  height: 54px;
  border-radius: 5px;
  padding: 0 25px;
  margin-top: 10px;

  a {
    color:#fff;
  }
`;

export const BtnWhite = styled.button`
  border: 1px solid #d5d5d5;
  background-color: #fff;
  color: #3f444a;
  height: 54px;
  border-radius: 5px;
  padding: 0 25px;
  margin-top: 10px;
`;

export const BtnClose = styled.button`
  border: none;
  background-color: #cdd2d6;
  color: #3f444a;
  height: 32px !important;
  width: 32px;
  border-radius: 50%;
  margin-top: 10px;
  position: relative;
  text-indent: -9999px;

  &::before,
  &::after {
    position: absolute;
    left: 14px;
    top: 8px;
    content: " ";
    height: 16px;
    width: 3px;
    background-color: #fff;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const Popup = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: ${(props) => (props.isVisible ? "block" : "none")};

  .dimd {
    background-color: #f0f0f0;
    opacity: 0.85;
    width: 100%;
    height: 100%;
  }

  .pop-box {
    /* 팝업 기본 */
    position: absolute;
    top: 50px;
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    max-height: calc(100vh - 100px);
    overflow: auto;
  }

  .pop-box.pop-detail {
    width: 600px;
    left: calc(50% - 300px);
  }

  .pop-box.pop-cancle,
  .pop-box.pop-success,
  .pop-box.pop-fail {
    width: 400px;
    top: calc(50% - 200px);
    left: calc(50% - 200px);
  }

  .pop-box.pop-coupon,
  .pop-box.pop-ticket {
    width: 600px;
    left: calc(50% - 300px);
  }

  .pop-box .input-box {
    padding: 10px 25px;
    min-height: unset;
  }

  .pop-box p.content-name:first-child {
    margin-top: 0;
  }

  .pop-box p.content-name:not(:first-child) {
    margin-top: 50px;
  }

  .pop-detail ul li {
    display: flex;
    border-bottom: 1px solid #d5d5d5;
    padding: 10px 0;
    margin-bottom: 25px;
  }

  .pop-detail ul li:last-child {
    border-bottom: none;
  }

  .pop-detail ul li span {
    color: #8e8e93;
    width: 100px;
  }

  .pop-box .btn-box {
    justify-content: space-between;
    margin-top: 25px;
  }

  .pop-box .btn-box button {
    width: calc(50% - 10px);
    height: 40px;
    font-size: 14px;
  }

  .pop-box.pop-ticket .d-flex {
    flex-wrap: wrap;
  }

  .pop-box.pop-ticket .d-flex .checks {
    margin-right: 15px;
  }

  .pop-box.pop-ticket .input-box.d-flex span {
    width: 50px;
    color: #c0c0c0;
    font-size: 14px;
    text-align: center;
  }

  .pop-box .line {
    background-color: #f1f1f1;
    width: 100%;
    height: 1px;
    margin: 20px 0;
  }

  .pop-box.pop-ticket .content-sub strong {
    font-weight: bold;
    color: #0f62fe;
  }

  .pop-box.pop-success .content-name,
  .pop-box.pop-fail .content-name {
    margin-top: 15px !important;
  }
`;

export const Page = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  a {
    color: #3f444a;
    padding: 3px 10px;
    text-decoration: none;
    font-size: 14px;
  }

  a.active {
    background-color: #653ffb;
    color: white;
    border-radius: 8px;
  }

  a:hover:not(.active) {
    background-color: #ddd;
    border-radius: 8px;
  }
`;

export const SidePanel = styled.div`
  &.hide {
    width: 0;
    padding: 0;
  }

  &.show {
    width: 350px;
  }

  transition: 0.3s all;
  overflow-y: auto;
  padding: 40px 50px 30px 30px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  position: absolute;
  box-shadow: 4px 0px 5px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &.hide button.slide {
    display:none;
  }

  button.slide {
    display:block;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    transition: 0.3s all;
    margin-left: auto;
    position: absolute;
    right: 10px;
    top: 40px;
    background-color: #fff;
  }

  &.hide .side-wrap {
    display: none;
  }

  button.slide:hover {
    background-color: #f1f2f2;
  }

  .content-name img {
    margin-right: 10px;
  }

  .reser-btns li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.3s all;
  }

  .reser-btns li a {
    width:calc( 100% - 24px );
  }

  .reser-btns li span {
    visibility: hidden;
    width: 24px;
    height: 22px;
  }

  .reser-btns li:hover {
    background-color: #f2f4f8;
  }

  .reser-btns li:hover span {
    visibility: visible;
  }

  .calandar-box {
    width: 100%;
    height: 250px;
    background-color: #efefef;
  }
`;
