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
                    <div className="Rectangle1081">시험 찾기</div>
                </Link>
            </nav>
    </div>
    );
};

export default StuMain;