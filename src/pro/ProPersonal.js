//ProPersonal.js(교수용 - 채점 결과 개인 상세 조회 페이지)
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProEditor from "./ProEditor";
import "./ProPersonal.css";

const ProPersonal = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const [personalDetails, setPersonalDetails] = useState({
    title: '',
    subject: '',
    questionContent: [],
    name: '',
    content: ''
  });

  useEffect(() => {
    const fetchPersonalDetails = async () => {
      try {

        const response = await axios.get(`http://43.202.54.156:8080/answer/${number}`);
        setPersonalDetails(response.data);
      } catch (error) {
        console.error('Error fetching personal details:', error);
      }
    };

    fetchPersonalDetails();
  }, [number]);

  const handleCloseButtonClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProEditor />
      <div className="writepropersonal">
        <h1>{personalDetails.subject}</h1>
        <h3>{personalDetails.title}</h3>
        <p className="stupersonal">
          <span className="stuname">{personalDetails.name}</span> 학생 답변
        </p>
      </div>

      <div>
        {personalDetails.questionContent.map((question, index) => (
          <p key={index} className="personalques"> 문제) {question}</p>
        ))}
      </div>

      <p className="stuperonaltext">{personalDetails.content}</p>
      
      <button className="closebutton" onClick={handleCloseButtonClick}>닫기</button>
    </div>
  );
};

export default ProPersonal;

