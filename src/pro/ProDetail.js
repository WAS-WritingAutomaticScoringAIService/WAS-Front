import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProDetail.css';
import ProEditor from "./ProEditor";

const ProDetail = () => {
  // State should be an array to store the list of details
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://43.201.84.225:8080/answer/list');
        // If you expect multiple details and want to display them all,
        // you should save the array directly to your state.
        setDetails(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);

  // Render each detail in the array
  const renderDetails = () => {
    return details.map((detail, index) => (
      <div className='getdetailinfo' key={index} style={{ display: 'flex' }}>
        <p className='getdetailname'>{detail.name}</p>
        <p className='getdetailid'>{detail.number}</p>
        <p className='getdetailcheck'>{detail.score || '점수 없음'}</p>
      </div>
    ));
  };



  return (
    <div>
      <ProEditor />
      <div className='detailinfo'>
        <p className='detailname'>이름</p>
        <p className='detailid'>학번</p>
        <p className='detailcheck'>채점 결과</p>
      </div>
      {renderDetails()} 
    </div>
  );
};

export default ProDetail;



