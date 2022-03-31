import React from 'react';
import SurveyResults from "../../components/SurveyResults";
import List from "@mui/material/List";

const SurveyPage = () => (
    <>
        <List>
        <SurveyResults survey={25}/>
        <SurveyResults survey={50}/>
        <SurveyResults survey={95}/>
        </List>
    </>
);

export default SurveyPage;