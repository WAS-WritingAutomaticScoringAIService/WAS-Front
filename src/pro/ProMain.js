//ProMain.js
import React from "react";
import {Link} from 'react-router-dom';
import "./ProMain.css";
import ProEditor from "./ProEditor";

const ProMain = () => {
    return(
    <div className="ProMain">
        <ProEditor/>
    
            <nav>
                <Link to="/promain/createtask">
                    <div className="Rectangle1079">과제 생성</div>
                </Link>
                <Link to="/promain/checktask">
                    <div className="Rectangle1080">과제 조회</div>
                </Link>
            </nav>
    </div>
    );
};

export default ProMain;