import React from 'react';
import Survey from '../../components/Survey';
import { useState, useEffect } from 'react';
import { List } from '@mui/material';
import { Button } from 'react-bootstrap';


function ListUserPage () {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        flexWrap: 'wrap',
    };


    return(
        <div>
            <h1>List users in peer group then uses use location to send recipient id to complete survey page</h1>
            <h1>use props from survey page for data to make api calls</h1>
            
        </div>
    )
}
export default ListUserPage;