import React, {useEffect, useState} from 'react';
import SurveyResults from "../../components/SurveyResults";
import List from "@mui/material/List";

const SurveyPage = () => {
        const [surveys, setNewSurveys] = useState('')
        useEffect(() => {
                const fetchData = async () => {
                        const result = await fetch(`http://praterlaravel.azurewebsites.net/api/surveys`);
                        const body = await result.json();
                        setNewSurveys(body);
                }
                fetchData();
        }, []);
        let others = Object.values(surveys)
        return (<>
                    <List>
                            {others.map((groups) => (
                            <SurveyResults survey={groups}/>
                            ))}
                    </List>
            </>
        );
}



export default SurveyPage;