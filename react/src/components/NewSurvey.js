import React from 'react';
import { useLocation } from 'react-router-dom'
import api from '../services/api';
import { useState, useEffect } from 'react';
import { TextField, createTheme, ThemeProvider, Typography, Button, List } from '@mui/material';

const Theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'createsurvey'
                    },
                    style: {
                        color: '#5E4AE3',
                        fontSize: '4.5em',
                        fontWeight: 'bold'
                    }
                }
            ]
        }
    }
});

function NewSurvey() {

    const location = useLocation()
    const { peer_group_id } = location.state


    //Some helper functions for page functionality
    function add_new() {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        var input = document.getElementById("input").value;

        li.style.textAlign = 'center';
        li.style.color = '#5E4AE3';
        li.style.marginTop = '1vh';
        li.style.marginBottom = '1vh';

        if (input !== "") {
            li.appendChild(document.createTextNode(input));
            ul.appendChild(li);
        }

        document.getElementById("input").value = "";
    }

    function clear_data() {
        document.getElementById("input").value = "";
        document.getElementById("list").innerHTML = "";
    }


    const [survey_id, set_survey_id] = useState({});

    // useEffect(() => {
    //     console.log("how many times was this called")
    //     let api_survey_id = api.addSurvey(peer_group_id)
    //     set_survey_id(api_survey_id)
    // }, []);

    const getNewSurvey = async () => {
        let api_survey_id = await api.addSurvey(peer_group_id)
        console.log("this is our api survey id inside get New Survey", api_survey_id)
        set_survey_id(api_survey_id)
        let variable_list = document.getElementById("list")
        add_categories(api_survey_id, peer_group_id)
    }

    function add_categories(survey_id, peer_group_id) {
        var list = document.getElementById("list")
        var children = list.children;
        for (var i = 0; i < children.length; i++) {
            api.addCategory(survey_id, peer_group_id, children[i].innerHTML)
        }
        list.innerHTML = ""

    }


    return (
        <>
            <div style={{ width: '100%', height: '80vh', textAlign: 'center' }}>
                <ThemeProvider theme={Theme}>
                    <div style={{ paddingTop: '20vh' }}>
                        <Typography variant="createsurvey">Create Survey</Typography>
                    </div>
                    <br />
                    <div>
                        <TextField id="input" label="Name" variant="standard" style={{ width: '27vw' }} />
                    </div>
                    <div style={{ margin: '5vh auto auto auto', textAlign: 'center', border: '1px solid #9787ff', borderRadius: '5px', width: '35%' }} >
                        {/* List */}
                        <List id="list" style={{ textAlign: 'center', overflow: 'hidden', overflowY: 'scroll', height: '10vh' }} >
                            {/* Example Listitem */}
                            {/* <li style={{textAlign: 'center', color: '#5E4AE3', marginTop: '1vh', marginBottom: '1vh' }}>
                                test */}
                        </List>

                    </div>
                    <div style={{ display: 'inline-flex', marginTop: '5vh' }}>
                        <Button sx={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: '1vw', marginRight: '1vw' }} variant="outlined" color='error' onClick={clear_data}>
                            <Typography variant="buttons">
                                Clear
                            </Typography>
                        </Button>
                        <Button sx={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: '1vw', marginRight: '1vw' }} variant="outlined" onClick={add_new}>
                            <Typography variant="buttons">
                                New Category
                            </Typography>
                        </Button>
                        <Button sx={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: '1vw', marginRight: '1vw' }} variant="outlined" onClick={() => getNewSurvey()}>
                            <Typography variant="buttons">
                                Submit
                            </Typography>
                        </Button>
                    </div>
                </ThemeProvider>
            </div>

        </>


    );

}

export default NewSurvey;