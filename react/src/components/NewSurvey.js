import React, { Component } from 'react';

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

        function submit_data() {
            //must be connected to database
            document.getElementById("input").value = "";
            document.getElementById("list").innerHTML = "";


        }

        function clear_data() {
            document.getElementById("input").value = "";
            document.getElementById("list").innerHTML = "";
        }


     
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