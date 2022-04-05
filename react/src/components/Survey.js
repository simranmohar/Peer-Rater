import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import api from '../services/api';


function Survey(props){ 
    const [value, setValue] = React.useState(0);

    function postRating(newValue) {
        setValue(newValue)
        api.addRating(props.surveyId, props.peerGroupId, props.categoryId, 4, newValue)
       
    }



    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">{props.description}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            postRating(newValue);
          }}
        />
      </Box>
    );
}

export default Survey