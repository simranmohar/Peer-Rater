import axios from "axios";
import { useState } from "react";
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
        border: '2px solid $clr-primary',
        background: 'transparent',
        color: '#DC143C',
        // transition: background 200ms ease-in, color 200ms ease-in;
    },
    parent: { 
        width: '300px',
       }

}

function Group(props) {
    // const [fetchedData, setFetchedData] = useState([]);

    // React.useEffect(() => {
    //     const getData = async () => {
    //         const data = await axios.get('http://praterlaravel.azurewebsites.net/api/peer-groups');
    //         setFetchedData(data);
    //     };
    //     getData();
    // }, []);

    // console.log("data: ", fetchedData);

    // var groups = fetchedData;
    // console.log(groups.length)

    const [group, setNewGroup] = useState('')
    const getNewSurvey = (props) =>{
        // axios.get('http://praterlaravel.azurewebsites.net/api/peer-groups')
        // .then(res => {
        //     console.log(res.data)
        //     res.data.forEach((data) => console.log(data.description));
        //     console.log(res.data[0].id)
        //     api.addSurvey(res.data[0].id).then(r => {
        //         console.log(r)
        //     })
        //     // setNewGroup(res.data[0].description)
        //     // console.log(res.data.description)
        // }).catch(err => {
        //     console.log(err)
        // })
        // api.addSurvey(props)
        

    }
    return (
        <div id="test" style={cardStyle.parent}>
            {/* {fetchedData.data ? <h2>{fetchedData.data[0].description}</h2> : null} */}
            <div className="row">
                <div style={cardStyle.card_v1}>
                    <div className="card__body">
                        <img style={cardStyle.image} src={props.img} />
                        {/* {fetchedData.data[0].description ? <h2 className="card__title">{fetchedData.data[0].description}</h2>: null} */}
                        <h3 className="card__title" style={cardStyle.title}>{props.description}</h3>
                        <p className="card__description" style={cardStyle.description}>Milestone 1</p>
                    </div>
                    <button className="card__btn" tyle={cardStyle.button} onClick={getNewSurvey(props.id_value)}><Link to={`/newsurvey`}>
                New Survey</Link></button>
                </div>
            </div>
            {/* {groups.map((group, key) => {
                <div key={key}>
                    {group ? <h6>{group[key].description}</h6> : null}
                </div>
            }
            )} */}
        </div>
    );
}

export default Group;