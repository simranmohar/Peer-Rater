import axios from "axios";
import React from "react";


const signup = (email, password, name, isInstructor) => {
    if (isInstructor === 0){
        return axios.post("/register", {email, password, name}).then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                axios.defaults.headers.common["authorization"] = `Bearer ${response.data.access_token}`;
            }
            return response.data;
        });
    }else {
        return axios.post("/register", {email, password, name, isInstructor}).then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                axios.defaults.headers.common["authorization"] = `Bearer ${response.data.access_token}`;
            }
            return response.data;
        });
    }

};

const login = async (email, password) => {
    return await axios.post("/login", {email, password}).then((response) => {
        if (response.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            axios.defaults.headers.common["authorization"] = `Bearer ${response.data.access_token}`;
        }
        return response.data;
    });
};

const logout = async () => {
    return await axios.post("/logout", null).then((response) => {
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
                return true;
            }else {
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