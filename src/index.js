//index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import StuMain from './stu/StuMain';
import ProMain from './pro/ProMain';
import Login from './comb/Login';
import CheckTask from './pro/CheckTask';
import CreateTask from './pro/CreateTask';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stumain" element={<StuMain />} />
      <Route path="/promain" element={<ProMain />} />
      <Route path="/promain/createtask" element={<CreateTask />} />
      <Route path="/promain/checktask" element={<CheckTask />} />
    </Routes>
  </BrowserRouter>
);
