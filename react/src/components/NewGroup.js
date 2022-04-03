import React, {Component, useEffect, useState} from 'react';
import api from "../services/api";
import Groups from "./Groups";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {LoadingButton, ToggleButton, ToggleButtonGroup} from "@mui/lab";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
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

    // VALIDATION AND LOADING

    const [loading, setLoading] = useState(false);
    const [submitButtonState, setSubmitButtonState] = useState(true);
    const [inputValue, setInputValue] = useState("")

    const updateLoading = bool => {
        setLoading(bool);
    };

    function ValidateInput(event) {
        let inputText= event.target.value;
        if (inputText.length === 0){
            setSubmitButtonState(true);
        }else {
            setSubmitButtonState(false);
        }
    }

    // VALIDATION END

    function submit_data(loadingCallBack) {
        loadingCallBack(true)

        let input = document.getElementById("input").value;
        setInputValue(input)

        if (submit === "join") {
            api.getMe().then(u => {
                api.joinPeerGroup(input, u).then(r => {
                    newGroupAdded();
                    loadingCallBack(false)
                    setSubmitButtonState(true)
                })
            })
        } else {
            api.addPeerGroup(input).then(r => {
                newGroupAdded();
                loadingCallBack(false)
                setSubmitButtonState(true)
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
                <TextField  style={groupStyle.input}  id="input" label={submit === "create" ? "Group Name":"#Group ID"} onChange={ValidateInput.bind(this)}/>
                <LoadingButton
                    onClick={() => {
                        submit_data(updateLoading)
                    }}
                    variant="contained"
                    color="primary"
                    loading={loading}
                    disabled={submitButtonState}
                    id="loadingButtonSubmit"
                >
                    Submit
                </LoadingButton>

            </div>
</Paper>
        </React.Fragment>

    );

}

export default NewGroup;