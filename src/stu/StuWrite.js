import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StuWrite.css';
import { useParams, useNavigate } from 'react-router-dom';
import StuEditor from './StuEditor';

function StuWrite() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignmentDetails, setAssignmentDetails] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAssignmentDetails = async () => {
      try {
        const response = await axios.get(`http://52.79.220.41:8080/task/read/${id}`);
        setAssignmentDetails(response.data);
        // 문제마다 답안을 빈 문자열로 초기화합니다.
        setAnswers(new Array(response.data.questions.length).fill(''));
      } catch (error) {
        console.error('과제 세부 정보를 불러오는 중 오류 발생:', error);
      }
    };

    if (id) {
      fetchAssignmentDetails();
    }
  }, [id]);

  const handleAnswerChange = (index, event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submissionData = {
      id,
      answers
    };

    try {
      await axios.post('http://52.79.220.41:8080/task/read/5/submit', submissionData);
      alert('과제가 성공적으로 제출되었습니다.');
      navigate('/submission-success'); // 제출 성공 페이지 또는 경로로 리디렉션합니다.
    } catch (error) {
      console.error('과제 제출 중 오류 발생:', error);
      alert('과제 제출에 실패했습니다.');
    }
  };

  return (
    <div className="stuwrite-container">
          <StuEditor/>
      <h1>과제 제목: {id}</h1>
      {assignmentDetails ? (
        <form onSubmit={handleSubmit}>
          {assignmentDetails.questions.map((question, index) => (
            <div key={index}>
              <h2>문제 {question.quesNum}</h2>
              <p>{question.content}</p>
              <textarea
                className='stuwritetextarea'
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e)}
                required
              />
            </div>
          ))}
          <button type='submit' className='stuwritebutton'>제출하기</button>
        </form>
      ) : (
        <p>과제를 불러오는 중입니다...</p>
      )}
    </div>
  );
}

export default StuWrite;