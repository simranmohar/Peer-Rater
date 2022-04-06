import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import api from '../services/api';


let currentValueOfRating = null;

function postRating(newValue, cat, user) {
    console.log(newValue)
    currentValueOfRating = newValue
    if (currentValueOfRating == null){
        console.log("NEW")
        // (_survey_id, _peer_group_id, _category_id, _recipient_id, _ratings)
        api.addRating(cat.survey_id, cat.peer_group_id, cat.id, user.id, newValue)
    }else {
        console.log("HAD OLD RATING")
    }

}



function Survey({cat, user, arrayOfRatings, ratingID}){
    let currentValue = null;
    let categoryId;
    try {
        categoryId = arrayOfRatings.category_id
        if (categoryId === ratingID){
            currentValue = arrayOfRatings.rating;
        }else {
            currentValue = null;
        }
    }
     catch {
        categoryId = null;
    }

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
                        value={currentValue}
                        onChange={(event, newValue) => {
                            postRating(newValue);
                        }}
                    />
            </Box>
        </>
    );
}

export default Survey