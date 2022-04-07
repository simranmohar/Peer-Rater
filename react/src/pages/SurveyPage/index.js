import React, {useEffect, useState} from 'react';
import SurveyResults from "../../components/SurveyResults";
import List from "@mui/material/List";
import {Fade} from "@mui/material";
import api from "../../services/api";

function SurveyPage({group}) {
    const [loading, setLoading] = React.useState(true);

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
        const [surveys, setNewSurveys] = useState('')
        useEffect(() => {
            api.getSurveys(group.id).then((response) => {
                setNewSurveys(response.data);
                setLoading(false);
            })
        }, [group]);
        let others = Object.values(surveys)
        return (<>
                <Fade in={!loading}>

                    <List style={flexContainer}>
                            {others.map((groups, key) => (
                            <SurveyResults key={key} survey={groups} row={group} size={group.users.length}/>
                            ))}
                    </List>
                </Fade>
            </>
        );
}



export default SurveyPage;