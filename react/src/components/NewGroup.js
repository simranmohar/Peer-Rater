import React, {useState} from 'react';
import api from "../services/api";
import Paper from "@mui/material/Paper";
import {LoadingButton } from "@mui/lab";
import { ToggleButton } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import {TextField} from "@mui/material";
import Auth from "../services/auth";
import authService from "../services/auth";
import {toast} from "react-toastify";

function NewGroup({newGroupAdded}) {
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

    const [submit, setNewSubmit] = useState('join')
    const handleSubmit = (event, newSubmit) => {
        if (newSubmit !== null) {
            setNewSubmit(newSubmit);
        }
    };

    // VALIDATION AND LOADING

    const [loading, setLoading] = useState(false);
    const [submitButtonState, setSubmitButtonState] = useState(true);

    const updateLoading = bool => {
        setLoading(bool);
    };

    function ValidateInput(event) {
        let inputText = event.target.value;
        if (inputText.length === 0) {
            setSubmitButtonState(true);
        } else {
            setSubmitButtonState(false);
        }
    }

    // VALIDATION END

    function submit_data(loadingCallBack) {
        loadingCallBack(true)

        let input = document.getElementById("input").value;
        if (submit === "join") {
            api.joinPeerGroup(input, Auth.getCurrentUserFull()).then(response => {
                if (!response){
                    toast("Could not find group.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        type: "error",
                        progress: 3000,
                    });
                }else {
                    if (response.data.message.includes("Error")) {
                        toast(response.data.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            type: "error",
                            progress: 3000,
                        });
                    } else if (response.data.message.includes("Success")) {
                        toast(`Success. You have joined peer group #${input}!`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: 3000,
                        });
                    }
                }
            })

            loadingCallBack(false)
            setSubmitButtonState(true)
            newGroupAdded();
        } else {
            api.addPeerGroup(input).then(r => {
                toast(`Success. You have created peer group "${input}"!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 3000,
                });
                newGroupAdded();
                loadingCallBack(false)
                setSubmitButtonState(true)
            })
        }

        document.getElementById("input").value = "";
    }

    const instructor =  authService.getCurrentUserFull().isInstructor;


    return (
        <React.Fragment>

            {instructor === 0 ? <>
                <ToggleButtonGroup
                color="primary"
                value={submit}
                exclusive
                onChange={handleSubmit}
                id="submitGroup"
            >
                <ToggleButton value="join">Join Group</ToggleButton>
            </ToggleButtonGroup></> :  <>
                <ToggleButtonGroup
                    color="primary"
                    value={submit}
                    exclusive
                    onChange={handleSubmit}
                    id="submitGroup"
                >
                    <ToggleButton value="join">Join Group</ToggleButton>
                    <ToggleButton value="create">Create Group</ToggleButton>
                </ToggleButtonGroup></> }



            <Paper elevation={7} style={{width: "100%", marginBottom: 10, paddingBottom: 10, paddingTop: 10}}>

                <div className="d-inline-flex container-fluid">
                    <TextField style={groupStyle.input} id="input"
                               label={submit === "create" ? "Group Name" : "#Group ID"}
                               onChange={ValidateInput.bind(this)}/>
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