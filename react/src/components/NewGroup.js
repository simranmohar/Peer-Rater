import React, { Component } from 'react';
import { PostPeerGroup } from '../../src/services/modules/index.js'

class NewGroup extends Component {
    render() {
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
            // document.getElementById("input").value = "";
            // document.getElementById("list").innerHTML = "";
            const name = document.getElementById("input").value
            console.log(name)
            // create new peer group here
            PostPeerGroup(name)
            document.getElementById("input").value = ""
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
                        <h2>Creating New Group:</h2>
                        <input style={groupStyle.input} type="text" id="input"/>
                        <div style={groupStyle.container}>

                            <ul style={groupStyle.list} id="list">
                            </ul>
                        </div>
                        <button style={groupStyle.button} onClick={add_new} type="button" className="btn btn-primary">Add
                            New Category
                        </button>
                        <button style={groupStyle.button} onClick={submit_data} type="button"
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

export default NewGroup;