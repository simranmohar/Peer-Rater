import axios from "axios";
import React from "react";

async function addPeerGroup(_description) {
    try {
        return await axios.post('/peer-groups', {description: _description});
    } catch (error) {
        return error
    }
}

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
