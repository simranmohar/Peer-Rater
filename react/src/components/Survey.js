import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";

class Survey extends Component {

    
    render() {

        const surveyStyle = {
        main:{
            alignItems:"center",
            textAlign:"center"
        },
        radio:{
            marginRight: "12.5%"
        },

        list:{
            listStyle: 'none'

        },
        button:{
            width: "75%"
        }

    }
        return (
            <div style={surveyStyle.main}>
                <h1>Milestone 1</h1>
                <ul style={surveyStyle.list}>
                    <li>
                         <Form >
               
               <div> 
               <label style={surveyStyle.radio} class="radio-inline">
                     Category 1
               </label>

                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>

                </div>
             
               
            </Form> 
                    </li>

                    <li>
                         <Form >
               
               <div> 
               <label style={surveyStyle.radio} class="radio-inline">
                     Category 1
               </label>

                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>

                </div>
             
               
            </Form> 
                    </li>

                    <li>
                         <Form >
               
               <div> 
               <label style={surveyStyle.radio} class="radio-inline">
                     Category 1
               </label>

                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>
                <input name = "drone" style={surveyStyle.radio} type="radio"></input>

                </div>
             
               
            </Form> 
                    </li>
                </ul>
           
            <Button style={surveyStyle.button} className="btn btn-primary btn-user btn-block signup-button mt-5" variant="primary" type="submit">
                    Submit
            </Button>
            </div>
            
        );
    }
}

export default Survey;