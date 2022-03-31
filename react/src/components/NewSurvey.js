import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";

class NewSurvey extends Component {

    render() {

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
                width: '50%',
                margin: '2px'
            },
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

        function submit_data() {
            //must be connected to database
            document.getElementById("input").value = "";
            document.getElementById("list").innerHTML = "";
            document.getElementById("name").value = "";
        }

        function clear_data() {
            document.getElementById("input").value = "";
            document.getElementById("list").innerHTML = "";
            document.getElementById("name").value = "";
        }

        function populate(id){
            // var name = document.getElementById(id).innerHTML;
            // document.getElementById("dropdownMenuLink").innerHTML = name;
            console.log(id)

        }
        


     
        return (
            <div id="wrapper">
           
                        <div id="content-wrapper" className="d-flex flex-column">
                            
                            <div className="container" id="main-container">
                                <React.Fragment>
                                    <h2>Creating New Survey:</h2>
                                    <div class="dropdown show">
                        <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Peer Groups 
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#" id="COMP-3717" onClick={() => populate(this.id)}>COMP 3717</a>
                        <a class="dropdown-item" href="#" id="COMP-3760" onClick={() => populate(this.id)}>COMP 3760</a>
                        <a class="dropdown-item" href="#" id="COMP-3522" onClick={() => populate(this.id)}>COMP 3522</a>
                        </div>
                        </div>
                        <input style={surveyStyle.input} type="text" id="name"/> <br/>
                        <input style={surveyStyle.input} type="text" id="input"/>
        
                        <div style={surveyStyle.container}>

                            <ul style={surveyStyle.list} id="list">
                            </ul>
                        </div>
                        <button style={surveyStyle.button} onClick={add_new} type="button" className="btn btn-primary">Add
                            New Category
                        </button>
                        <button style={surveyStyle.button} onClick={submit_data} type="button"
                                className="btn btn-primary">Submit
                        </button>
                        <button type="button" onClick={clear_data} className="btn btn-danger">Clear</button>
                    </React.Fragment>

                </div>
               
            </div>
        </div>
        
        
        );
    }
}

export default NewSurvey;