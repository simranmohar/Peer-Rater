import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from "axios";
import authService from "./services/auth";
import {toast} from "react-toastify";

axios.defaults.baseURL = 'https://praterlaravel.azurewebsites.net/api'
// Add a 401 response interceptor
const handleLogout = () => {
    authService.logout().then(r => {
        setTimeout(() => {
            window.location.href = '/login'
        }, 1000);
    });
}


axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (403 === error.response.status || 401 === error.response.status) {
            toast.error('Access Denied. Redirecting you to login', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 3000,
                toastId: "403401Error"
            });
            return error;

        }

        if (404 === error.response.status) {
            toast.error('Whoops, we could not find anything for the information you requested.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 3000,
                toastId: "404Error"
            });
            return error;

        }
        if (422 === error.response.status) {
            toast.error('Your request could not be processed, check the parameters you have provided.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 3000,
                toastId: "422Error"
            });
            return error;

        }
        if (429 === error.response.status || 503 === error.response.status) {
            toast.error('Please slow down with all these requests.. We are on a student plan :( ' +
                'Try again Later? <3', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 3000,
                toastId: "429Error"
            });

            return error;
        }

        if (500 === error.response.status) {
            toast.error('Something went wrong internally. :( We have been notified.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 3000,
                toastId: "500Error"
            });

            return error;
        }

    }
)


// axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     if (403 === error.response.status) {
//         handleLogout()
//     }
//
//
// });
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.access_token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${user.access_token}`;
    axios.defaults.headers.common["Accept"] = 'application/json';
    axios.defaults.headers.common["Accept"] = "'Content-Type': 'application/json'"
} else {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
}

export default axios;

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
