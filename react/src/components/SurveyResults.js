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
import {CircularProgress, Fade, LinearProgress} from "@mui/material";

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

function getCompletion(rating, category, size) {
    if (rating.length === 0 || category.length === 0) {
        return 0;
    }
    let calc = (rating.length / category.length) / size;
    return Math.floor(calc);
}

function SurveyCard(survey, size, row){
    const [rate, setNewRate] = useState('')
    const [category, setNewCategory] = useState('')
    const [percentage, setNewPercentage] = useState('')
    const [completion, setNewCompletion] = useState('')
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const [ratingsResult, categoryResult] = await Promise.all([fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}/surveys/${survey.id}/ratings`),fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${survey.peer_group_id}/surveys/${survey.id}/categories`)]);
            const rating = await ratingsResult.json();
            const category = await categoryResult.json();
            setNewRate(rating);
            setNewCategory(category);
            setNewPercentage(getPercentage(rating));
            setNewCompletion(getCompletion(rating, category, size).toString());
            setLoading(false);
        }
        fetchData();
    }, [survey]);

    return (
        <React.Fragment>
            <Fade
                in={loading}
            >
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </Fade>
            <Fade
                in={!loading}
                style={{
                    transitionDelay: '800ms'
                }}
            >
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
            </Fade>
            <CardActions>
                <Button component={Link} to="/listuserpage" state={{survey:survey, row:row, category:category, rate:rate}} size="small">
                    COMPLETE</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function SurveyResults({survey, size, row})  {
    return (
        <Box sx={{ maxWidth: 150 }}>
            <Card variant="outlined">{SurveyCard(survey, size, row)}</Card>
        </Box>
    );
}