import * as React from "react";
import api from "../services/api";
import { Link } from 'react-router-dom';

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
        height: '18rem',
        width: '18rem',
        objectFit: 'cover',
    },
    title: {
        padding: '1rem',
    },
    description: {
        padding: '0 1rem',
    },
    button: {
        padding: '1rem',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: '1rem',
        margin: '1rem',
        border: '2px solid #DC143C',
        background: 'transparent',
        color: 'Tomato',
        transition: 'background 200ms ease-in, color 200ms ease-in',
    },
    hover: {
        transform: 'scale(1.02)',
    },
    
    hover: {
        background: '$clr-primary',
        color: 'white',
    },
    parent: { 
        width: '300px',
    }

}

function Group(props) {
    // const getNewSurvey = (props) =>{
    //     api.addSurvey(props)
    // }
    return (
        <div id="test" style={cardStyle.parent}>
            <div className="row">
                <div style={cardStyle.card_v1}>
                    <div className="card__body">
                        <img style={cardStyle.image} src={props.img} />
                        <h3 className="card__title" style={cardStyle.title}>{props.description}</h3>
                        <p className="card__description" style={cardStyle.description}>Milestone 1</p>
                        <p>Peer group id: {props.id_value}</p>
                    </div>
                    <button className="card__btn" tyle={cardStyle.button}><Link to={`/newsurvey`} state={{ peer_group_id: props.id_value}}>
                New Survey</Link></button>
                </div>
            </div>
        </div>
    );
}
// onClick={() => getNewSurvey(props.id_value)}


export default Group;