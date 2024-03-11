/* ProDetail.js (교수용-채점 결과 상세 조회 페이지)*/
import React from "react";
import ProEditor from "./ProEditor";
import './ProDetail.css';

const ProDetail = () => {
  return(
    <div>
        <div>
            <ProEditor />
                <div className='detailinfo'>
                    <p className='detailname'>이름</p>
                    <p className='detailid'>학번</p>
                    <p className='detailcheck'>채점 결과</p>
                </div>
         </div>
    </div>
  );
};

export default ProDetail;
