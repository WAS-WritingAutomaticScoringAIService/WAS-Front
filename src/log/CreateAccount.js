import "./CreateAccount.css";
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const CreateAccount = () => {
  const [signEmail, setSignEmail] = useState('');
  const [signPassword, setSignPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchoolsFromBackend = async () => {
      try {
        //(백엔드와 연결예정)

        // 백엔드 연결 시 삭제 예정
        const fetchedSchools = [
          { id: 1, name: '숙명여자대학교' },
          { id: 2, name: '연세대학교' },
        ];

        setSchools(fetchedSchools);
      } catch (error) {
        console.error('학교 가져오기 오류', error);
      }
    };

    fetchSchoolsFromBackend();
  }, []);

  const handleRegister = async () => {
    try {
      // 모든 필드 입력
      if (!signEmail || !signPassword || !confirmPassword || !name || !school || !idNumber || !department) {
        alert('모든 필드를 입력하세요');
        return;
      }

      // 비밀번호 확인
      if (signPassword !== confirmPassword) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다');
        return;
      }

      // 사용자가 작성한 필드로 지금은 무시
      // eslint-disable-next-line no-unused-vars
      const user = {
        signEmail,
        signPassword,
        name,
        school,
        idNumber,
        department,
      };

      // (백엔드와 연결예정)
      /*
      const response = await axios.post('/api/register', user);
      console.log(response.data);
      alert('회원가입이 성공적으로 완료되었습니다');

      window.location.href = "/login";
      */

    } catch (error) {
      console.error('Error during registration:', error);
      alert('회원가입 중 오류가 발생했습니다');
    }
  };

  return (
    <div className="signinbox">
      <div className="signinboxwelcometo">
        Welcome to
        <span id="signinboxWAS"> WAS</span>
      </div>
      <div className="signinboxsign">회원가입</div>

      <div>
        <label htmlFor="signEmail" className="signinemail">
          <span className="star">*</span>이메일
        </label>
        <input
          type="email"
          id="signEmail"
          value={signEmail}
          onChange={(e) => setSignEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="signPassword" className="signinpassword">
          <span className="star">*</span>비밀번호
        </label>
        <input
          type="password"
          id="signPassword"
          value={signPassword}
          onChange={(e) => setSignPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="signinpasswordconfirm">
          <span className="star">*</span>비밀번호 확인
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="signinname">
          <span className="star">*</span>이름
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="school" className="signinschool">
          <span className="star">*</span>학교 또는 기관
        </label>
        <select
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        >
          <option value="" disabled>
            소속된 학교 또는 기관은 선택하세요.
          </option>
          {schools.map((schoolOption) => (
            <option key={schoolOption.id} value={schoolOption.id}>
              {schoolOption.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="idNumber" className="signinidnumber">
          <span className="star">*</span>학번 또는 교번
        </label>
        <input
          type="text"
          id="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="department" className="signindepartment">
          <span className="star">*</span>학과
        </label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>

      <button onClick={handleRegister} className="signinbutton">가입하기</button>
    </div>
  );
};

export default CreateAccount;
