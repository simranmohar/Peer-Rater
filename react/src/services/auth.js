import axios from "axios";
import React from "react";
import {AxiosResponse} from "axios";


const signup = (email, password, name, isInstructor) => {
    if (isInstructor === 0){
        return axios.post("/register", {email, password, name}).then((response:AxiosResponse) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                axios.defaults.headers.common["authorization"] = `Bearer ${response.data.access_token}`;
                console.log(response.data)
            }
            return response.data;
        });
    }else {
        return axios.post("/register", {email, password, name, isInstructor}).then((response:AxiosResponse) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                axios.defaults.headers.common["authorization"] = `Bearer ${response.data.access_token}`;
                console.log(response.data)
            }
            return response.data;
        });
    }

};

const login = (email, password) => {
    return axios.post("/login", {email, password}).then((response:AxiosResponse) => {
        if (response.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            axios.defaults.headers.common["authorization"] = `Bearer ${response.data.access_token}`;
        }
        return response.data;
    });
};

const logout = () => {
    return axios.post("/logout", null).then((response:AxiosResponse) => {
        localStorage.removeItem("user");
        localStorage.removeItem("currentUser");
        return response.data;
    });


};


const setCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return axios.get("/me").then((response) => {
            if (response.data) {
                 localStorage.setItem("currentUser", JSON.stringify(response.data));
            }
        }).catch((e) => {
            alert("Fail")
        })
    }
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const verifyCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
         axios.get('/me', null).then((response) => {
            if (response.data.name) {
                localStorage.setItem("currentUser", JSON.stringify(response.data));
                console.log("added currentuser to local storage")
                return true;
            }else {
                console.log("Failed to get user. Please re-login")
                localStorage.removeItem("currentUser");
                localStorage.removeItem("user");
                return true
            }
        });
    }else {
        return false;
    }
}

const getCurrentUserFull = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
}
const authService = {
    signup,
    login,
    logout,
    setCurrentUser,
    getCurrentUser,
    getCurrentUserFull,
    verifyCurrentUser
};

export default authService;
