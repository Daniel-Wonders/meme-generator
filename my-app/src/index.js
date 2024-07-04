import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//import MyPage from './Project1-normalPage/MyPage'; // Project 1
//import './Project1-normalPage/MyPageStyles.css';   // Project 1

//import MyPage from './Project2-airvnvClone/MyPage';
//import './Project2-airvnvClone/MyPageStyles.css'

import Page from './Project3-MemeGenerator/Page';
import './Project3-MemeGenerator/PageStyles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
