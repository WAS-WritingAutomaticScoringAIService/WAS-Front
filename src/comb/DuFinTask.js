// DuFinTask.js(진행중인과제, 마감된 과제 네모 박스)
import React from 'react';
import './DuFinTask.css';

const DuFinTask = () => {
  return (
    <div>
      <div className='DuringTask'>
        <div className='ring'>진행중인 과제</div>
          <div className='DuTaskInfo'>
            <p className='DuTaskSubject'>과목</p>
            <p className='DuTaskDivision'>분반</p>
            <p className='DuTaskTitle'>제목</p>
            <p className='DuTaskFinishDate'>마감 일자</p>
          </div>
      </div>
      <div className="FinishTask">
        <div className = "ring">마감된 과제</div>
          <div className='FinTaskInfo'>
              <p className='FinTaskSubject'>과목</p>
              <p className='FinTaskDivision'>분반</p>
              <p className='FinTaskTitle'>제목</p>
              <p className='FinTaskFinishDate'>마감 일자</p>
          </div>
      </div>
    </div>
  );
};

export default DuFinTask;