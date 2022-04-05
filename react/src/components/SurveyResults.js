import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import auth from "../services/auth";

function getPercentage(rating) {
    let user = auth.getCurrentUserFull();
    let ratingValue = 0;
    let ratingCount = 0;
    rating.forEach((value) => {
        if (parseInt(value.recipient_id) === parseInt(user.id)) {
            ratingValue += parseInt(value.rating);
            ratingCount += 1;
        }
    })
    if (ratingCount === 0) {
        return 0;
    }
    return ratingValue / (ratingCount * 5) * 100;
}

function getCompletion(rating, category) {
    if (rating.length === 0 || category.length === 0) {
        return 0;
    }
    let calc = rating.length / category.length;
    return Math.floor(calc).toString();
}

function SurveyCard(survey, size){
    const [rate, setNewRate] = useState('')
    const [category, setNewCategory] = useState('')
    const [percentage, setNewPercentage] = useState('')
    const [completion, setNewCompletion] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const [ratingsResult, categoryResult] = await Promise.all([fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}/surveys/${survey.id}/ratings`),fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}/surveys/${survey.id}/categories`)]);
            const rating = await ratingsResult.json();
            const category = await categoryResult.json();
            setNewRate(rating);
            setNewCategory(category);
            setNewPercentage(getPercentage(rating));
            setNewCompletion(getCompletion(rating, category));
        }
        fetchData();
    }, [survey]);
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    SURVEY #{survey.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {percentage}%
                </Typography>
                <Typography variant="body2">
                    {completion}/{size} completed
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to="/listuserpage" state={{survey:survey}}size="small">
                COMPLETE</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function SurveyResults({survey, size})  {
    return (
        <Box sx={{ maxWidth: 150 }}>
            <Card variant="outlined">{SurveyCard(survey, size)}</Card>
        </Box>
    );
}