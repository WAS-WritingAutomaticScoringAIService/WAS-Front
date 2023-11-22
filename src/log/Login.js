//Login.js(로그인 페이지)
import "./Login.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');

  const handleLogin = () => {
    if (username && userpassword) {
      alert('로그인 성공'); 
    } else {
      alert('아이디와 비밀번호를 입력하세요');
    }
  };

  return (

    <div>
    <Link to="/">
    <div className="loginCenteredContainer">
      <div className="loginSubheader">모두를 위한 자동채점 서비스</div>
        <div className="loginWAS">WAS</div>
          <div className="loginAIHeader ">
            <span id="loginAIheader-ColorDifferent">W</span>riting{' '}
            <span id="loginAIheader-ColorDifferent">A</span>utomatic{' '}
            <span id="loginAIheader-ColorDifferent">S</span>coring AI Service
          </div>
      </div>
      </Link>

    <div className="rectangle13">
      <div className="loginboxwelcometo">
          Welcome to      
        <span id = "loginboxWAS"> WAS</span>
      </div>
      <div className="loginboxlogin">로그인</div>

      <div className="createaccount">
        <div className="noaccount">No Account ?</div>
            <Link to="/createaccount">
              <div className="gocreateaccount">
              회원가입
              </div>
            </Link>
      </div>

      <div className="idinputContainer">
        <label htmlFor="username" className="loginid">아이디</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="userpasswordinputContainer">
        <label htmlFor="userpassword" className="loginpassword">비밀번호</label>
        <input
          type="password"
          id="userpassword"
          value={userpassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>

      <button className="loginbutton" onClick={handleLogin}>로그인</button>
    </div>
    </div>
  );
};

export default LoginForm;

