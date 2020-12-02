import React from 'react';
import ReactDOM from 'react-dom';
import UploadFile from './components/UploadFile';
import Webcam from './components/Webcam'
import ShowDetection from './components/ShowDetection'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h2>Nipa cloud Nvision's Object Detection</h2>
    <UploadFile />
    {/* <Webcam /> */}
    <ShowDetection />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
