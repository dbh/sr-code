import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import Home from './components/Home';
import SRCode from './components/sr_code/SRCode';
import Quiz from './components/Quiz';
import NoPage from './components/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/sr_code" element={<SRCode />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
