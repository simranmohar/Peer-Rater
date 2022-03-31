import axios from "axios";
import React from "react";
import authHeader from "./authheader";

const API_URL = "http://127.0.0.1:8000/api";

const signup = (email, password, name) => {
    return axios
        .post(API_URL + "/register", {
            email,
            password,
            name,
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                setCurrentUser().then({});

            }
            return response.data;
        });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                setCurrentUser().then({});

            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const setCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user){
        const config = {
            headers: {
                Authorization: "Bearer " + user.access_token
            }
        }
        return axios
            .get(API_URL + "/me", config)
            .then((response) => {
                if (response.data.name) {
                    localStorage.setItem("currentUser", JSON.stringify(response.data));
                }
            })
            .catch((e) => {
                alert("Fail")
            })
    }
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
}
const authService = {
    signup,
    login,
    logout,
    setCurrentUser,
    getCurrentUser,
};

export default authService;