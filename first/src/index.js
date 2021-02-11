import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var app2 = (
  <div>
    <App person name='kondaya' age='60'/>
  </div>
)

ReactDOM.render(<App person name='shiva' age='25'/>, document.querySelector("#p1"));

ReactDOM.render(<App person name='shivakishore' age='24'/>, document.querySelector("#p2"));

ReactDOM.render(app2, document.querySelector("#p3"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
