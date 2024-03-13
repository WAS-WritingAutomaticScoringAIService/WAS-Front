import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StuEditor from "./StuEditor";
import "./StuSearch.css";
import { Link } from 'react-router-dom';

const StuSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [allAssignments, setAllAssignments] = useState([]); // 모든 과제 리스트를 저장할 상태
  const [searchResult, setSearchResult] = useState(null); // 검색 결과를 저장할 상태

  // 모든 과제 리스트를 가져오는 함수
  const fetchAllAssignments = async () => {
    try {
      const response = await axios.get('http://43.201.84.225:8080/task/list');
      setAllAssignments(response.data); // 모든 과제 리스트를 상태에 저장합니다.
    } catch (error) {
      console.error('과제 리스트 가져오기 오류:', error);
    }
  };

  useEffect(() => {
    fetchAllAssignments(); // 컴포넌트 마운트 시 모든 과제 리스트를 가져옵니다.
  }, []);

// 검색 핸들러 함수
const handleSearch = async () => {
  if (!searchText.trim()) {
    setSearchResult(null); // 검색어가 없으면 검색 결과를 비웁니다.
    return;
  }
  try {
    // 서버에서 예상하는 쿼리 파라미터 이름 'keyword'를 사용
    const response = await axios.get('http://43.201.84.225:8080/task/list/search', { params: { keyword: searchText } });
    setSearchResult(response.data); // 검색 결과를 상태에 저장합니다.
  } catch (error) {
    console.error('검색 중 오류 발생:', error);
  }
};

  // 검색 결과 또는 전체 과제 리스트를 표시할 리스트 아이템을 렌더링하는 함수
  const renderAssignments = () => {
    const assignmentsToShow = searchResult || allAssignments;
    return assignmentsToShow.map((item) => (
      // key prop을 최상위 div에 추가해야 합니다.
      <div key={item.id}> 
        <div className='getInfo'>
          <Link to={`/stuwrite/${item.id}`} style={{ display: 'flex' }}>
            <p className='getnumber'>{item.id}</p>
            <p className='getSubject'>{item.subject}</p>
            <p className='getDivision'>{item.cls}</p>
            <p className='getTitle'>{item.title}</p>
            <p className='getFinishDate'>{item.endTime}</p>
          </Link>
        </div>
      </div>
    ));
  };



  // 컴포넌트의 JSX를 리턴합니다.

  return (
    <div>
      <StuEditor />
      <div className='searchsubject'>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="과목을 검색하세요(띄어쓰기 없이 입력하세요.)"
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div className='DuInfo'>
        <p className='Dunumber'>번호</p>
        <p className='DuSubject'>과목</p>
        <p className='DuDivision'>분반</p>
        <p className='DuTitle'>제목</p>
        <p className='DuFinishDate'>마감 일자</p>
      </div>
      <div>
        <ul>
          {renderAssignments()} {/* 리스트 아이템을 렌더링하는 함수 호출 */}
        </ul>
      </div>
    </div>
  );
};

export default StuSearch;