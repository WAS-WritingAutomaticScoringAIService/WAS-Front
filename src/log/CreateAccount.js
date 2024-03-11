import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateAccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    signEmail: '',
    signPassword: '',
    confirmPassword: '',
    name: '',
    school: '',
    idNumber: '',
    department: '',
  });

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // 학교 목록 가져오기 로직 (백엔드 연결 예정)
    // 예시로 작성된 코드입니다. 실제로는 백엔드 API를 호출하는 코드로 대체해야 합니다.
    setSchools([
      { id: 1, name: '숙명여자대학교' },
      { id: 2, name: '연세대학교' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // 모든 필드 입력 확인
    if (Object.values(formData).some((value) => value === '')) {
      alert('모든 필드를 입력하세요');
      return;
    }

    // 비밀번호 확인 일치 확인
    if (formData.signPassword !== formData.confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다');
      return;
    }

    // API 명세에 맞춘 데이터 객체 생성
    const userData = {
      email: formData.signEmail,
      password: formData.signPassword,
      username: formData.name,
      role: 'USER',
      position: formData.school,
      number: formData.idNumber,
      department: formData.department,
    };

    try {
      // 백엔드와의 연결 코드
      const response = await axios.post('http://localhost:8080/api/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      alert('회원가입이 성공적으로 완료되었습니다');
      // 회원가입 성공 후 로그인 페이지로 리디렉션
      window.location.href = '/login';
    } catch (error) {
      console.error('회원가입 에러:', error);
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

      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="signEmail" className="signinemail">
            <span className="star">*</span>이메일
          </label>
          <input
            type="email"
            id="signEmail"
            name="signEmail"
            value={formData.signEmail}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="signPassword" className="signinpassword">
            <span className="star">*</span>비밀번호
          </label>
          <input
            type="password"
            id="signPassword"
            name="signPassword"
            value={formData.signPassword}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="signinpasswordconfirm">
            <span className="star">*</span>비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="name" className="signinname">
            <span className="star">*</span>이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="school" className="signinschool">
            <span className="star">*</span>학교 또는 기관
          </label>
          <select
            id="school"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              소속된 학교 또는 기관은 선택하세요.
            </option>
            {schools.map((schoolOption) => (
              <option key={schoolOption.id} value={schoolOption.name}>
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
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="department" className="signindepartment">
            <span className="star">*</span>학과
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="signinbutton">
          가입하기
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
