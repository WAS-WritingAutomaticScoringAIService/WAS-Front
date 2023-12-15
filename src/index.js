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
import StuWrite from './stu/StuWrite';
import StuCheckTask from './stu/StuCheckTask';
import StuDuTask from './stu/StuDuTask';
import StuSearch from './stu/StuSearch';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stumain" element={<StuMain />} />
      <Route path="/promain" element={<ProMain />} />
      <Route path="/stusearch" element={<StuSearch />} />
      <Route path="/createtask" element={<CreateTask />} />
      <Route path="/checktask" element={<CheckTask />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path='/stuwrite' element={<StuWrite />} />
      <Route path='/stuchecktask' element={<StuCheckTask />} />
      <Route path='/studutask' element={<StuDuTask />} />
    </Routes>
  </BrowserRouter>
);
