import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import api from '../services/api';
import auth from "../services/auth";
import {useState} from "react";


let currentValueOfRating = null;

async function postRating(newValue, cat, user, id) {
    if (id == null) {
        console.log("NEW")
        // (_survey_id, _peer_group_id, _category_id, _recipient_id, _ratings)
        return await api.addRating(cat.survey_id, cat.peer_group_id, cat.id, user.id, newValue)
    } else {
        return await api.putRating(cat.survey_id, cat.peer_group_id, cat.id, user.id, newValue, id)
    }

}



function Survey({cat, user, arrayOfRatings, ratingID}){


    let id = null;
    let oldOldValue = 0;
    arrayOfRatings.forEach((rating) => {
        if (cat.id === rating.category_id) {
            id = rating.id
            oldOldValue = rating.rating
        }
    })

    const [oldValue, setOldValue] = useState(oldOldValue);
    return (
        <>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend" style={{textTransform: "capitalize", marginLeft: 3, marginBottom: 8}}>{cat.description}</Typography>
                    <Rating
                        name="simple-controlled"
                        value={oldValue}
                        onChange={async (event, newValue) => {
                            setOldValue(newValue);
                            let oldId = id
                            id = await postRating(newValue, cat, user, oldId);
                            if (oldId === null) {
                                id = id.rating["id"]
                            }

                        }}
                    />
            </Box>
        </>
    );
}

export default Survey