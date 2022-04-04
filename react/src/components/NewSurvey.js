import React from 'react';
import { useLocation } from 'react-router-dom'
import api from '../services/api';
import { useState, useEffect } from 'react';

function NewSurvey() {

        const location = useLocation()
        const { peer_group_id} = location.state

        console.log("this is our bundle info", {peer_group_id})
        console.log("try to extract peer group id", peer_group_id)
    
    
        const surveyStyle = {
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

        //Some helper functions for page functionality
        function add_new() {
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            var input = document.getElementById("input").value;
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

        const getNewSurvey = async () =>{
            console.log("how many times was this called")
            let api_survey_id = await api.addSurvey(peer_group_id)
            console.log("this is our api survey id inside get New Survey", api_survey_id)
            set_survey_id(api_survey_id)
            let variable_list = document.getElementById("list")
            add_categories(api_survey_id, peer_group_id)
        }

        function add_categories(survey_id, peer_group_id){
            var list = document.getElementById("list")
            var children = list.children;
            for(var i = 0; i < children.length; i++){
                console.log(children[i].innerHTML)
                api.addCategory(survey_id, peer_group_id, children[i].innerHTML)
                list.innerHTML = ""
            }
        
        }
        
        console.log("this is our survey id", survey_id)


     
        return (
            <div id="wrapper">
           
            <div id="content-wrapper" className="d-flex flex-column">
                
                <div className="container" id="main-container">
                    <React.Fragment>
                        <h2>Creating New Survey:</h2>
                        <input style={surveyStyle.input} type="text" id="input"/>
                        <div style={surveyStyle.container}>

                            <ul style={surveyStyle.list} id="list">
                            </ul>
                        </div>
                        <button style={surveyStyle.button} onClick={add_new} type="button" className="btn btn-primary">Add
                            New Category
                        </button>
                        <button style={surveyStyle.button} onClick={() => getNewSurvey()} type="button"
                                className="btn btn-primary">Submit
                        </button>
                        <button type="button" onClick={clear_data} className="btn btn-danger">Clear</button>
                    </React.Fragment>

                </div>
               
            </div>
        </div>
        
        
        );
   
}

export default NewSurvey;