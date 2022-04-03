import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from "axios";
axios.defaults.baseURL = 'https://praterlaravel.azurewebsites.net/api'
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.access_token){
    axios.defaults.headers.common["authorization"] = `Bearer ${user.access_token}`;
    axios.defaults.headers.common["Accept"] = 'application/json';
    axios.defaults.headers.common["Accept"] = "'Content-Type': 'application/json'"
}else {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
}

export default axios;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
