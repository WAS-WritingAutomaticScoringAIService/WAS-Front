//index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import StuMain from './stu/StuMain';
import ProMain from './pro/ProMain';
import Login from './log/Login';
import CheckTask from './pro/CheckTask';
import CreateTask from './pro/CreateTask';
import CreateAccount from './log/CreateAccount';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stumain" element={<StuMain />} />
      <Route path="/promain" element={<ProMain />} />
      <Route path="/createtask" element={<CreateTask />} />
      <Route path="/checktask" element={<CheckTask />} />
      <Route path="/createaccount" element={<CreateAccount />} />
    </Routes>
  </BrowserRouter>
);
