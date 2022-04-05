import React from 'react';
import Survey from '../../components/Survey';
import { useState, useEffect } from 'react';
import { List } from '@mui/material';
import { Button } from 'react-bootstrap';
import {useLocation} from "react-router-dom";
import api from '../../services/api'



function ListUserPage () {
    const location = useLocation()
    const { survey } = location.state
    
    const peer_group_id = survey.peer_group_id
    const survey_id = survey.id
    console.log(survey_id, peer_group_id)

    const [peer_group_object, set_peer_group] = useState({});

    useEffect(() => {
       const peer_group = async() => {
        let peers = await api.getGroupMember(peer_group_id)
        set_peer_group(peers)
    }
        peer_group();
}, []);

    console.log("peer groups: ",peer_group_object.users)

    async function populate(){
        const list = document.getElementById("members")
        var li = document.createElement("li");

        let users = await peer_group_object.users 
        console.log(users.length)
        if(users.length>0){
            for(var i=0; i< users.length; i++){
                console.log("user: ",peer_group_object.users[i])
                li.appendChild(document.createTextNode(peer_group_object.users[i].name));
                list.appendChild(li);
            }
        }

    }

    populate()

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        flexWrap: 'wrap',
    };


    return(
        <div>
            <ul id="members">

            </ul>
            
        </div>
    )
}
export default ListUserPage;