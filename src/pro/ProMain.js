//ProMain.js(교수용-메인페이지)
import React from "react";
import {Link} from 'react-router-dom';
import "./ProMain.css";
import ProEditor from "./ProEditor";

const ProMain = () => {
    return(
    <div className="ProMain">
        <ProEditor/>
    
            <nav>
                <Link to="/createtask">
                    <div className="Rectangle1079">시험 생성</div>
                </Link>
                <Link to="/prodetail">
                    <div className="Rectangle1080">시험 채점 결과</div>
                </Link>
            </nav>
    </div>
    );
};

export default ProMain;