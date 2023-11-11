//App.js
import React from "react";
import {Link} from 'react-router-dom';
import './App.css';

const App = () => {
    return(
    <div className="Main">
        <div className="CenteredContainer">
          <div className="Subheader">모두를 위한 자동채점 서비스</div>
          <div className="WAS">WAS</div>
          <div className="AIHeader ">
            <span id="AIheader-ColorDifferent">W</span>riting{' '}
            <span id="AIheader-ColorDifferent">A</span>utomatic{' '}
            <span id="AIheader-ColorDifferent">S</span>coring AI Service
          </div>
        </div>
    
      <nav>
        <Link to="/stumain">
          <div className="Rectangle1077">학생용</div>
        </Link>
        <Link to="/promain">
          <div className="Rectangle1078">교수용</div>
        </Link>
      </nav>

        <Link to = "/login">
          <div className="rectangle18">로그인</div>
        </Link>
    </div>
    );
};

export default App;
