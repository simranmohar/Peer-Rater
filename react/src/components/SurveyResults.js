import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';


function SurveyCard(survey){
    survey = survey.survey
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    SURVEY
                </Typography>
                <Typography variant="h5" component="div">
                    95%
                </Typography>
                <Typography variant="body2">
                    2/5 responses completed
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to="/listuserpage" size="small">
                COMPLETE</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function SurveyResults({survey})  {
    return (
        <Box sx={{ maxWidth: 150 }}>
            <Card variant="outlined">{SurveyCard(survey={survey})}</Card>
        </Box>
    );
}