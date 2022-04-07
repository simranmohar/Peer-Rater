import React, { useEffect, useState } from 'react';
import Group from './Group';
import logo from '../img/peerrater.png';
import { CardMedia, Typography } from '@mui/material';
import OutlinedTimeline from './HomeTimeLine';
import api from "../services/api";


const GroupPage = () => {
    const [peerGroups, setNewPeerGroups] = useState('')
    useEffect(() => {
        api.getPeerGroups().then((response) => {
            setNewPeerGroups(response.data);
        })
    }, []);
    let group_list = Object.values(peerGroups)
    return (<>
        <div className="row">
            <CardMedia
                component="img"
                height="300"
                image={logo}
                alt="peer rater banner"
                sx={{ paddingBottom: '25px' }}
            />
            {group_list.map((group, key) => (
                <Group key={key} img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
                    title="COMP 3975" description={group.description} id_value={group.id} />
            ))}
            <OutlinedTimeline/>
        </div>
    </>
    );
}



export default GroupPage;