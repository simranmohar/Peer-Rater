import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import api from '../services/api';


function Survey({props, user, rate}){
    const [value, setValue] = React.useState(0);
    function postRating(newValue) {
        setValue(newValue)
       // (_survey_id, _peer_group_id, _category_id, _recipient_id, _ratings)
        api.addRating(props.survey_id, props.peer_group_id, props.id, user.id, newValue)
    }

    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
          <Typography component="legend" style={{textTransform: "capitalize", marginLeft: 3, marginBottom: 8}}>{props.description}</Typography>
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