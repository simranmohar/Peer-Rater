import axios from "axios";



const addPeerGroup = (_description) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return axios.post('/peer-groups', {description: _description}).then((response) => {
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


const addToPeerGroup = async (group_id, u) => {
    console.log(group_id, u)
    axios.post(`/peer-groups/${group_id}/attach`, {peerGroup_id: group_id, user_id: u}).then((response) => {
        return response
    }).catch((e) => {
        console.log("Failed to join peer group" + e)
        return e;
    })
}

async function getPeerGroups() {
    try {
        return await axios.get('/peer-groups', {});
    } catch (error) {
        console.log("ERROR: get peer groups + " + error)
    }
}

async function getRatings(peer_group_id, survey_id) {
    try {
        return await axios.get(`/peer-groups/${peer_group_id}/surveys/${survey_id}/ratings`, {});
    } catch (error) {
        console.log("ERROR: get ratings + " + error)
    }
}

async function getCategories(peer_group_id, survey_id) {
    try {
        return await axios.get(`peer-groups/${peer_group_id}/surveys/${survey_id}/categories`, {});
    } catch (error) {
        console.log("ERROR: get categories + " + error)
    }
}

async function getSurveys(group_id) {
    try {
        return await axios.get(`peer-groups/${group_id}/surveys`, {});
    } catch (error) {
        console.log("ERROR: get categories + " + error)
    }
}

const addSurvey = (_peer_group_id) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return axios.post(`/peer-groups/${_peer_group_id}/surveys`).then((response) => {
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
        return axios.post(`/peer-groups/${_peer_group_id}/surveys/${_survey_id}/categories/`, {description: _description}).then((response) => {
            return response.data.survey.id;
        }).catch((e) => {
            console.log("Failed to add survey " + e)
            return e;
        })
    }

}

const addRating = (_survey_id, _peer_group_id, _category_id, _recipient_id, _ratings) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (_ratings === null) {
        _ratings = 0;
    }
    if (user) {
        return axios.post(`/peer-groups/${_peer_group_id}/surveys/${_survey_id}/ratings`, {category_id: _category_id, recipient_id: _recipient_id, rating: _ratings}).then((response) => {
            return response.data;
        }).catch((e) => {
            console.log("Failed to add rating " + e)
            return e;
        })
    }

}

const putRating = (_survey_id, _peer_group_id, _category_id, _recipient_id, _ratings, id) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if (_ratings === null) {
        _ratings = 0;
    }
    if (user) {
        return axios.put(`/peer-groups/${_peer_group_id}/surveys/${_survey_id}/ratings/${id}`, {category_id: _category_id, recipient_id: _recipient_id, rating: _ratings}).then((response) => {
            return response.data;
        }).catch((e) => {
            console.log("Failed to add rating " + e)
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

async function getGroupMember(_id) {

    try {
        return await axios.get(`/peer-groups/${_id}`, {}).then((response) => {
            return response.data;
        })
    } catch (error) {
        alert("ERROR: get peer groups + " + error)
        return error
    }
}


async function getUsers() {
    try {
        return await axios.get(`/users`, {}).then((response) => {
            return response.data;
        })
    } catch (error) {
        alert("ERROR: get peer groups + " + error)
        return error
    }
}




const api = {
    addPeerGroup,
    getPeerGroups,
    joinPeerGroup,
    addToPeerGroup,
    addSurvey,
    addCategory,
    exitPeerGroup,
    addRating,
    putRating,
    getRatings,
    getCategories,
    getGroupMember,
    getSurveys,
    getUsers,

};

export default api;
