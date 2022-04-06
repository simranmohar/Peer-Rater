import { useState, useEffect } from "react";
import axios from 'axios';
// ------------------------- Get Bearer Token -------------------------

const user = JSON.parse(localStorage.getItem("user"));
// if (!user){
//     // Redirect to login page here
// }

const API_URL = `https://praterlaravel.azurewebsites.net/api`;
// CHANGE API_URL ONCE BACKEND IS DONE

// ------------------------- Get All peer-groups request -------------------------

// const [GroupsInfo, setGroupsInfo] = useState({});

// useEffect(() => {
//     const fetchData = async () => {
//         const result = await fetch(API_URL + "/peer-groups", config);
//         // REPLACE URL
//         const body = await result.json();
//         setGroupsInfo(body);
//     }
//     fetchData();
// }, []);

// ------------------------- Get ONE peer-groups request -------------------------

// const FetchOneGroup = async () => {
//     const result = await fetch(API_URL + "/peer-groups" + id, config);
//     // $ID WILL BE THE GROUP ID
//     const body = await result.json();
//     setGroupInfo(body);
// }

// Code to set in UI to display all groups

// const [GroupInfo, setGroupInfo] = useState({
//     id: 0,
//     user_id: 0,
//     description: '',
//     created_at: '',
//     updated_at: ''
// });

// FetchOneGroup();


// ------------------------- Post & Put peer-groups request -------------------------


// Change Group name to desired choice


// PostPeerGroup(description)

export function PostPeerGroup(name) {
    const config = {
        headers: {
            Authorization: "Bearer " + user.access_token
        }
    }
    console.log(config)

    axios.post("/peer-groups", {
        description: name
    }, config)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}

// TO-DO: Add bearer token to request
export function UpdatePeerGroup(name) {
    const config = {
        headers: {
            Authorization: "Bearer " + user.access_token
        }
    }
    console.log(config)

    fetch("/peer-groups" + name, { description: name }, config)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}