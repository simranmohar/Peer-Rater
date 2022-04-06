import * as React from "react";
import { Link } from 'react-router-dom';
import { Button, Card, Typography } from "@mui/material";
import { CardMedia } from '@mui/material';

const cardStyle = {
    card_v1: {
        overflow: 'hidden',
        boxShadow: '0 2px 20px $clr-gray300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 200ms ease-in',
        textAlign: 'center',
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
        appearance: 'button',
        backfaceVisibility: 'hidden',
        backgroundColor: '#405cf5',
        borderRadius: '6px',
        borderWidth: '0',
        boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: 'pointer',
        fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
        fontSize: '100%',
        height: '44px',
        lineHeight: '1.15',
        margin: '12px 0 0',
        outline: 'none',
        overflow: 'hidden',
        padding: '0 25px',
        position: 'relative',
        textAlign: 'center',
        textTransform: 'none',
        transform: 'translateZ(0)',
        transition: 'all .2s,box-shadow .08s ease-in',
        userSelect: 'none',
        touchAction: 'manipulation',
        width: '100%',
    },
    hover: {
        transform: 'scale(1.02)',
        background: '$clr-primary',
        color: 'white',
    },
    parent: {
        width: '300px',
    },
    link: {
        textDecoration: 'none',
    }

}

function Group(props) {
    return (
        <div id="test" style={cardStyle.parent}>
            <Card variant="outlined"> <div className="row">
                <div style={cardStyle.card_v1}>
                    <div className="card__body" style={cardStyle.card_v1}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={props.img}
                            alt="group image"
                        />
                        <h3 className="card__title" style={cardStyle.title}>{props.description}</h3>
                        <Typography className="card__description" style={cardStyle.description}>Milestone 1</Typography>
                        <Typography>Peer group id: {props.id_value}</Typography>
                    </div>
                    <Link to={`/newsurvey`} state={{ peer_group_id: props.id_value }} style={cardStyle.link}> <Button variant="outlined" sx={{ margin: '20px' }}>
                        <Typography variant="buttons" text-decoration="none">
                            new survey
                        </Typography>
                    </Button>
                    </Link>
                </div>
            </div></Card>

        </div>

    );
}


export default Group;