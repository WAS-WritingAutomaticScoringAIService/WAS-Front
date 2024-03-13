//CreateTask.js(교수용-과제 생성 페이지)
import React, { useState} from 'react';
import './CreateTask.css';
import ProEditor from './ProEditor';
import axios from 'axios';

//폼 데이터를 useState로 관리
const CreateTask = () => {

  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    division: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    questions: [''], // 배열로 문제 저장
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const endpoint = 'http://43.201.84.225:8080/task/create';
  
    const payload = {
      title: formData.title,       // 사용자가 입력한 제목
      subject: formData.subject,   // 사용자가 입력한 과목명
      cls: formData.division,      // 선택된 분반
      startTime: formData.startDate + "T" + formData.startTime + ":00", // 시작 시간
      endTime: formData.endDate + "T" + formData.endTime + ":00",       // 종료 시간
      questions: formData.questions.map((content, index) => ({
        content,         // 문제 내용
        ques_num: String(index + 1)  // 문제 번호 문자열로
      }))
    };
  
    axios.post(endpoint, payload, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
      .then(response => {
        console.log('Task created successfully: ', response.data);
        alert('과제가 성공적으로 생성되었습니다.');
      })
      .catch(error => {
        console.error('Error creating task: ', error);
        alert('과제 생성 중 오류가 발생했습니다.');
      });

  };
  


  //입력창에 변경되는 값들을 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'password' && /^\d{0,4}$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name !== 'password') {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  //새로운 문제 플러스버튼 클릭 시 추가
  const handleAddQuestion = () => {
    if (formData.questions.length < 10){
      setFormData({
        ...formData,
        questions: [...formData.questions, ''], 
      });
    }
  };

  //각 문제에 대해서 입력창 변경 처리
  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index] = e.target.value;
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };


  return (
    <div className="CreateTask">
      <div>
        <ProEditor />
      </div>

      <form onSubmit={handleSubmit}>
        <div className='title'>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder='제목을 입력해 주세요. ex)2023-1 중간고사'
          />
        </div>

        <div className='container'>
          <div className='subject'>
            <label htmlFor="subject">과목명</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder='띄어쓰기 없이 입력해주세요. ex)비판적인사고와토론'
            />
          </div>

          <div className='class'>
            <label htmlFor="division">분반</label>
            <select
              id="division"
              name="division"
              value={formData.division}
              onChange={handleInputChange}
            >
              <option value="" disabled style={{ color: '#C1C1C1' }}>000</option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
              <option value="004">004</option>
              <option value="005">005</option>
              <option value="006">006</option>
              <option value="007">007</option>
              <option value="008">008</option>
              <option value="009">009</option>
            </select>
          </div>
        </div>

        <div className='duedate'>
          <label>기한 설정</label>
          <div className='startdate'>
            <label htmlFor='startDate'>시작</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
          />
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
            />
          </div>
          <div className='enddate'>
            <label htmlFor="endDate">마감</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='questions'>
          <label htmlFor="question">문제 (최대 10개)</label>
          {formData.questions.map((question, index) => (
            <div key={index}>
              <textarea
                id={`question-${index}`}
                name={`question-${index}`}
                value={question}
                onChange={(e) => handleQuestionChange(e, index)}
                placeholder={`문제${index + 1}. ex)"<성범죄 피의자의 신상공개>에 대한 토론에서 국민의 알권리와 개인의 인권 사이에서 판단의 기준과 이유를 설명하고, 반론을 구성하라.`}
              />
            </div>
          ))}
          <button type="button"className="plusbutton" onClick={handleAddQuestion}>+</button>
          <div className='createbutton'>
            <button type="submit" className="submitbutton">과제 생성하기</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default CreateTask;