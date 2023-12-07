//StuWrite.js(학생용-답안작성 페이지)
import React, { useState } from 'react';
import StuEditor from './StuEditor';
//import axios from 'axios';
import './StuWrite.css';

function StuWrite() {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {

    //(백엔드와 연결 예정) 
    // axios.post('/api/submit-answer', { answer })
    //   .then(response => {
    //     console.log('백엔드 응답:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('답안 제출 중 오류:', error);
    //   });

    // 현재로서 콘솔에 답안을 로그로 출력
    console.log('제출된 답안:', answer);
  };

  return (
    <div>
        <StuEditor/>
            <textarea
                className='stuwritetextarea'
                value={answer}
                onChange={handleAnswerChange}
            />

      <button onClick={handleSubmit} className='stuwritebutton'>제출하기</button>
    </div>
  );
}

export default StuWrite;
