//CreateTask.js
import React, { useState} from 'react';
import './CreateTask.css';
import ProEditor from './ProEditor';

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

  //입력창에 변경되는 값들을 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //새로운 문제 플러스버튼 클릭 시 추가
  const handleAddQuestion = () => {
    if (formData.questions.length < 3){
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

  const handleSubmit = (e) => {

    alert("과제 생성 폼 작성이 완료되었습니다.")

    e.preventDefault();
    // 폼 제출 로직 구현
    console.log('과제 생성 폼이 작성되었습니다 : ', formData);
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
              placeholder='과목명을 입력해 주세요. ex)비판적인 사고와 토론'
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
              <option value="" disabled style={{ color: '#C1C1C1' }}>00</option>
              <option value="option1">01</option>
              <option value="option2">02</option>
              <option value="option3">03</option>
              <option value="option4">04</option>
              <option value="option5">05</option>
              <option value="option6">06</option>
              <option value="option7">07</option>
              <option value="option8">08</option>
              <option value="option9">09</option>
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
          <label htmlFor="question">문제 (최대 3개)</label>
          {formData.questions.map((question, index) => (
            <div key={index}>
              <textarea
                id={`question-${index}`}
                name={`question-${index}`}
                value={question}
                onChange={(e) => handleQuestionChange(e, index)}
                placeholder={`문제${index + 1}. ex)"비대면 진료를 허용해야 한다"에 대해서 주장과 근거를 작성하시오.`}
              />
            </div>
          ))}
          <button type="button"className="plusbutton" onClick={handleAddQuestion}>+</button>
        </div>

      <div className='createbutton'>
        <button type="submit" className="submitbutton">과제 생성하기</button>
      </div>
      </form>
    </div>
  );
};

export default CreateTask;