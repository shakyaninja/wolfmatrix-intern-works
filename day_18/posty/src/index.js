import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login.component';
ReactDOM.render(
 <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/' element={<App />}>

    </Route>
  </Routes>
 </BrowserRouter>
  ,
  document.getElementById('root')
);
