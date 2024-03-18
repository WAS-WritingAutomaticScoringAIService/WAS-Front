//ProDetail.js(교수용 - 채점 결과 상세 조회 (list))
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProDetail.css';
import ProEditor from "./ProEditor";
import { useParams, Link } from 'react-router-dom';

const ProDetail = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]); 
  const [assignmentDetails, setAssignmentDetails] = useState({}); 
      
        useEffect(() => {
          const fetchData = async () => {
            const hardcodedId = 'your-hardcoded-id'; 
            try {
              const response = await axios.get(`http://43.202.54.156:8080/task/60/answerList`);
              setAssignmentDetails({
                title: response.data.title,
                subject: response.data.subject,
                cls: response.data.cls
              });
              setAnswers(response.data.answers);
            } catch (error) {
              console.error('에러', error);
            }
          };
      

          fetchData();
        }, []); 

  return (
    <div>
      <ProEditor />
      <div className='prodetailtitle'>
      <h1>{assignmentDetails.subject} ({assignmentDetails.cls}) </h1>
      <h3>{assignmentDetails.title}</h3>
      </div>

      <div className='detailinfo'>
        <p className='detailname'>이름</p>
        <p className='detailid'>학번</p>
        <p className='detailcheck'>채점 결과</p>
      </div>

      {answers.map((detail, index) => (
        <div className='getdetailinfo' key={index}>
          <p className='getdetailname'>{detail.name || '이름 없음'}</p>
          <Link to={`/pro-personal/${detail.number}`} className='getdetailid-link'>
            <p className='getdetailid'>{detail.number || '학번 없음'}</p>
          </Link>
          <p className='getdetailcheck'>{detail.score !== null ? detail.score : '점수 없음'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProDetail;