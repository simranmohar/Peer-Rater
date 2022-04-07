import React, {useEffect, useState} from 'react';
import SurveyResults from "../../components/SurveyResults";
import List from "@mui/material/List";
import {Fade} from "@mui/material";
import api from "../../services/api";

function SurveyPage({group}) {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
        return (<>
                    <List style={flexContainer}>
                            {group.surveys.map((survey, key) => (
                            <SurveyResults key={key} survey={survey} row={group} size={group.users.length}/>
                            ))}
                    </List>
            </>
        );
}



export default SurveyPage;