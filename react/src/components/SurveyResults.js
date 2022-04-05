import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';


function SurveyCard(survey, size){
    const [rate, setNewRate] = useState('')
    const [category, setNewCategory] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const [ratingsResult, categoryResult] = await Promise.all([fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}/surveys/${survey.id}/ratings`),fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}/surveys/${survey.id}/categories`)]);
            const rating = await ratingsResult.json();
            const category = await categoryResult.json();
            setNewRate(rating);
            setNewCategory(category);
        }
        fetchData();
    }, [survey]);
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
                    {rate.length} ratings
                    <br/>{category.length} categories
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to="/listuserpage" size="small">
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