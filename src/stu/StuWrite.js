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
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');

  useEffect(() => {
    const fetchAssignmentDetails = async () => {
      try {
        const response = await axios.get(`http://3.34.191.40:8080/task/read/${id}`);
        setAssignmentDetails(response.data);
        setAnswers(response.data.questions.map(() => ''));
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
    
    // 서버가 기대하는 형식에 맞추어 answers 배열을 구성합니다.
    const submissionData = {
      name: name,
      studentID: studentID,
      answers: answers.map(answer => ({ content: answer }))
    };
  
    try {
      // POST 요청의 URL과 본문 데이터를 업데이트합니다.
      const endpoint = `http://3.34.191.40:8080/task/read/${id}/submit`;
      const response = await axios.post(endpoint, submissionData, {
        headers: {
          'Content-Type': 'application/json', // 콘텐츠 타입을 JSON으로 명시합니다.
        }
      });
      // 응답 처리
      if (response.status === 200) {
        alert('과제가 성공적으로 제출되었습니다.');
        navigate('/stusearch'); // 제출 성공 페이지 또는 경로로 리디렉션합니다.
      }
    } catch (error) {
      console.error('과제 제출 중 오류 발생:', error);
      alert('과제 제출에 실패했습니다.');
    }
  };
  

  return (
    <div className="stuwrite-container">
      <StuEditor/>
      <div className='writetitle'>
      <h1>과제 제목: {id}</h1>
      </div>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            className='name-input'
            placeholder='이름'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className='student-id-input'
            placeholder='학번'
            type='text'
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            required
          />
        </div>

        {assignmentDetails ? (
          <>
            {assignmentDetails.questions.map((question, index) => (
              <div key={index}>
                <div className='writeques'>
                  <h2>문제 {question.quesNum}</h2>
                  <p>{question.content}</p>
                </div>
                <textarea
                  className='stuwritetextarea'
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type='submit' className='stuwritebutton'>제출하기</button>
          </>
        ) : (
          <p>과제를 불러오는 중입니다...</p>
        )}
      </form>
    </div>
  );
}

export default StuWrite;