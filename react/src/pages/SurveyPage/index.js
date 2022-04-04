import React, {useEffect, useState} from 'react';
import SurveyResults from "../../components/SurveyResults";
import List from "@mui/material/List";
import {useLocation} from "react-router-dom";

function SurveyPage({group}) {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
        const [surveys, setNewSurveys] = useState('')
        useEffect(() => {
                const fetchData = async () => {
                    const result = await fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/${group.id}/surveys`);
                        const body = await result.json();
                        setNewSurveys(body);
                }
                fetchData();
        }, [group]);
        let others = Object.values(surveys)
        return (<>
                    <List style={flexContainer}>
                            {others.map((groups, key) => (
                            <SurveyResults key={key} survey={groups}/>
                            ))}
                    </List>
            </>
        );
}



export default SurveyPage;