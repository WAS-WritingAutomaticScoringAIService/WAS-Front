// ProEditor.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProEditor.css';

const ProEditor = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <div className="service-title">WAS</div>
        </Link>

        <Link to="/promain">
          <div className="blue-rectangle">교수용</div>
        </Link>
      </div>
    </div>
  );
};

export default ProEditor;