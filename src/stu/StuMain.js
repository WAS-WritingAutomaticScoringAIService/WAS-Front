//StuMain.js(학생용-메인페이지)
import React from "react";
import {Link} from 'react-router-dom';
import "./StuMain.css";
import StuEditor from "./StuEditor";

const StuMain = () => {
    return(
    <div className="StuMain">
        <StuEditor/>
    
            <nav>
                <Link to="/stusearch">
                    <div className="Rectangle1081">과제 검색</div>
                </Link>
                <Link to="/stuchecktask">
                    <div className="Rectangle1082">과제 조회</div>
                </Link>
            </nav>
    </div>
    );
};

export default StuMain;