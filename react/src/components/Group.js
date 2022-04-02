import axios from "axios";
import { useState } from "react";
import * as React from "react";
import api from "../services/api";

// "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

const cardStyle = {
    card_v1: {
        overflow: 'hidden',
        boxShadow: '0 2px 20px $clr-gray300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 200ms ease-in'
    },
    image: {
        height: '12rem',
        width: '12rem',
        objectFit: 'cover',
    }

}

function Group(props) {
    const [group, setNewGroup] = useState('')
    const getNewSurvey = () =>{
        axios.get('http://praterlaravel.azurewebsites.net/api/peer-groups')
        .then(res => {
            console.log(res.data)
            res.data.forEach((data) => console.log(data.description));
            console.log(res.data[0].id)
            api.addSurvey(res.data[0].id).then(r => {
                console.log(r)
            })
            // setNewGroup(res.data[0].description)
            // console.log(res.data.description)
        }).catch(err => {
            console.log(err)
        })

    }
    const getNewGroup = () => {
        axios.get('http://praterlaravel.azurewebsites.net/api/peer-groups')
        .then(res => {
            console.log(res.data)
            res.data.forEach((data) => console.log(data.description));
            console.log(res.data[0].description)
            setNewGroup(res.data[0].description)
            // console.log(res.data.description)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div class="row">
            <div style={cardStyle.card_v1}>
                <div className="card__body">
                    <img style={cardStyle.image} src={props.img}/>
                    {group && <h2 className="card__title">{group}</h2>}
                    <h3 className="card__title">Milestone 1</h3>
                    <p className="card__description">{props.description}</p>
                </div>
                <button className="card__btn" onClick={getNewSurvey}>View Ratings</button>
                <button className="card__btn" onClick={getNewGroup}>Get New Group</button>
            </div>
        </div>
    );
}

export default Group;