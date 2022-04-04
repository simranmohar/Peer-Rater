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


const joinPeerGroup = async (group_id, u) => {
    return axios.post(`/peer-groups/${group_id}/attach`, {user_id: u.id}).then((response) => {
    }).catch((e) => {
        console.log("Failed to join peer group" + e)
        return e;
    })
}

const getMe = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let bearer = 'Bearer ' + user.access_token;
    const result = await fetch(`http://praterlaravel.azurewebsites.net/api/me`, {
        method: 'get',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    });
    return result.json();
}


async function getPeerGroups() {

    try {
        return await axios.get('/peer-groups', {});
    } catch (error) {
        alert("ERROR: get peer groups + " + error)
        return error
    }
}

const addSurvey = (_peer_group_id) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return axios.post(`/peer-groups/${_peer_group_id}/surveys`).then((response) => {
            if (response.data) {
                localStorage.setItem("currentUser", JSON.stringify(response.data));
            }
            return response.data.survey.id;
        }).catch((e) => {
            console.log("Failed to add survey " + e)
            return e;
        })
    }
}

const addCategory = (_survey_id, _peer_group_id, _description) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return axios.post(`/categories/`, {survey_id: _survey_id, peer_group_id: _peer_group_id, description: _description}).then((response) => {
            if (response.data) {
                localStorage.setItem("currentUser", JSON.stringify(response.data));
            }
            return response.data.survey.id;
        }).catch((e) => {
            console.log("Failed to add survey " + e)
            return e;
        })
    }

}

const exitPeerGroup = async (group_id, u) => {
    return axios.post(`/peer-groups/${group_id}/detach`, {user_id: u}).then((response) => {
    }).catch((e) => {
        console.log("Failed to join peer group" + e)
        return e;
    })
}




const api = {
    addPeerGroup,
    getPeerGroups,
    joinPeerGroup,
    addSurvey,
    getMe,
    addCategory,
    exitPeerGroup
};

export default api;
