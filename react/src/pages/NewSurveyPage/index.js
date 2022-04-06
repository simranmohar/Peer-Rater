import { Card, CardMedia } from '@mui/material';
import React from 'react';
import NewSurvey from '../../components/NewSurvey';
import survey from '../../img/survey.png';


const NewSurveyPage = () => (
    <>
        {/* <Card>
            <CardMedia
                component="img"
                height="340"
                image={survey}
                alt="peer rater banner"
            />
        </Card> */}
            <NewSurvey />

    </>

)
export default NewSurveyPage;