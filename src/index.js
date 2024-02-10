import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserInput from './userInput';
import OutputTable from './outputTable'
import Copyright from './copyright'
import TotalTable from './totalTable'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UserInput />
    <OutputTable />
    <TotalTable />
    <Copyright />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
