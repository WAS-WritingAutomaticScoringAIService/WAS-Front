// DuringTask.js
import React from 'react';
import './DuFinTask.css';

const DuFinTask = () => {
  return (
    <div>
      <div className='DuringTask'>
        <div className='ring'>진행중인 과제</div>
          <div className='TaskInfo'>
            <p className='TaskSubject'>과목</p>
            <p className='TaskDivision'>분반</p>
            <p className='TaskTitle'>제목</p>
            <p className='TaskstartDate'>진행 일자</p>
          </div>
      </div>
      <div className="FinishTask">
        <div className = "ring">마감된 과제</div>
      </div>
    </div>
  );
};

export default DuFinTask;