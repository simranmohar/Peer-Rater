import React, {Component, useState} from 'react';
import api from "../services/api";
import Groups from "./Groups";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
// import { PostPeerGroup } from '../../src/services/modules/index.js'

function NewGroup ({newGroupAdded}) {
    const groupStyle = {
        list: {
            flexWrap: 'wrap'
        },

        container: {
            height: '200px',
            overflow: 'scroll',
            padding: '10px'
        },
        button: {
            margin: '10px'
        },
        input: {
            width: '100%',
            margin: '2px'
        }
    }

    const [submit, setNewSubmit] = useState('create')
    const handleSubmit = (event, newSubmit) => {
        if (newSubmit !== null) {
            setNewSubmit(newSubmit);
        }
    };

    function submit_data() {
        let input = document.getElementById("input").value;
        if (submit === "join") {
            api.getMe().then(u => {
                api.joinPeerGroup(input, u).then(r => {
                    newGroupAdded();
                })
            })
        } else {
            api.addPeerGroup(input).then(r => {
                newGroupAdded();
            })
        }

        document.getElementById("input").value = "";
    }



    return (
        <React.Fragment>
            <ToggleButtonGroup
                color="primary"
                value={submit}
                exclusive
                onChange={handleSubmit}
                id = "submitGroup"
            >
                <ToggleButton value="create">Create Group</ToggleButton>
                <ToggleButton value="join">Join Group</ToggleButton>
            </ToggleButtonGroup>

            <Paper elevation={7} style={{width: "100%", marginBottom: 10, paddingBottom: 10, paddingTop:10}}>

            <div className="d-inline-flex container-fluid">
                <input style={groupStyle.input} type="text" id="input"/>
                <button onClick={submit_data} type="button"
                        className="btn btn-primary d-inline-flex">Submit
                </button>
            </div>
</Paper>
        </React.Fragment>

    );

}

export default NewGroup;