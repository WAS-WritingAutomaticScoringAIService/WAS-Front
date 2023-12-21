//ProPersonal.js(교수용 - 채점 결과 개인 상세 조회 페이지)
import React from "react";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate를 사용
import ProEditor from "./ProEditor";
import "./ProPersonal.css";


const ProPersonal = () => {
  const navigate = useNavigate();

  // 닫기 버튼 클릭을 처리하는 함수
  const handleCloseButtonClick = () => {
    // 이전 페이지로 이동
    navigate(-1); 
  };

  return (
    <div>
        <ProEditor />
        <h1>채점 결과 개인 상세 조회 페이지</h1>

      {/* 닫기 버튼 */}
      <button className = "closebutton" onClick={handleCloseButtonClick}>닫기</button>
    </div>
  );
};

export default ProPersonal;
