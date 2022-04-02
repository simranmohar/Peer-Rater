import axios from "axios";
import React from "react";



const addPeerGroup = (_description) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return axios.post('/peer-groups', {description: _description}).then((response) => {
            if (response.data) {
                localStorage.setItem("currentUser", JSON.stringify(response.data));
            }
        }).catch((e) => {
            console.log("Failed to add peer group" + e)
            return e;
        })
    }
};



async function getPeerGroups() {

    try {
        return await axios.get('/peer-groups', {});
    } catch (error) {
        alert("ERROR: get peer groups + " + error)
        return error
    }
}


const api = {
    addPeerGroup,
    getPeerGroups
};

export default api;
