// StuEditor.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StuEditor.css';

const StuEditor = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <div className="service-title">WAS</div>
        </Link>

        <Link to="/stumain">
          <div className="blue-rectangle">학생용</div>
        </Link>
      </div>
    </div>
  );
};

export default StuEditor;