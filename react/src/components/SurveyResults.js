import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";


function SurveyCard(survey){
    survey = survey.survey
    const [surveys, setNewSurveys] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}`);
            const body = await result.json();
            setNewSurveys(body);
        }
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {surveys.description}
                </Typography>
                <Typography variant="h5" component="div">
                    95%
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    SCORE
                </Typography>
                <Typography variant="body2">
                    2/5 responses completed
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">COMPLAIN</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function SurveyResults({survey})  {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{SurveyCard(survey={survey})}</Card>
        </Box>
    );
}