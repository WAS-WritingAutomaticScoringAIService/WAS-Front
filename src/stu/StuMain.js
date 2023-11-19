// StuMain.js(학생용-메인페이지)
import React, { useState } from 'react';
import StuEditor from "./StuEditor";
import "./StuMain.css";
// import axios from 'axios'; 백엔드 연결 예정

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {

      //백엔드 연결 예정
      //  백엔드 API 엔드포인트 입력예정
      // const apiUrl = 'https://backend-api.com/endpoint';

      // Axios를 사용하여 백엔드로 요청 보냄
      // const response = await axios.get(apiUrl, { params: { query: searchText } });

      // 응답에서 가져온 데이터를 상태에 설정
      // setSearchResult(response.data);

      // 임시로 가짜 데이터를 사용하여 결과를 설정(안불러올거임)
      setSearchResult(null);
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
    }
  };

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
              <p className='DuSubject'>과목</p>
              <p className='DuDivision'>분반</p>
              <p className='DuTitle'>제목</p>
              <p className='DuFinishDate'>마감 일자</p>
        </div>


      {/* 과목 검색 결과를 보여줄 부분 */}
      {searchResult && (
        <div>
          <ul>
            {searchResult.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
