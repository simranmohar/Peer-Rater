import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function Survey(props){ 
    const [value, setValue] = React.useState(0);

    function postRating(newValue) {
        document.getElementById("input").value = "";
        document.getElementById("list").innerHTML = "";
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