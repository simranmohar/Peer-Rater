import React from 'react';
import Survey from '../../components/Survey';
import { useState, useEffect } from 'react';
import { List } from '@mui/material';
import { Button } from 'react-bootstrap';


function CompleteSurveyPage () {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        flexWrap: 'wrap',
    };

    const [categories, setNewCategories] = useState('')
            useEffect(() => {
            const fetchData = async () => {
                const result = await fetch(`https://praterlaravel.azurewebsites.net/api/categories`);
                    const body = await result.json();
                    setNewCategories(body);
            }
            fetchData();
    }, []);
    let others = Object.values(categories)
    let othersFiltered = []

    function filter_categories(element) {
       if (element.survey_id == 138) {
           othersFiltered.push(element)
       }
    }
    others.forEach(element => filter_categories(element))

    function add_scores(othersFiltered) {
        let sum = 0

     }

    return(
        <div>
            <Survey/>
            <List style={flexContainer}>
                            {othersFiltered.map((groups, key) => (
                            <Survey key={key} description={groups.description} peerGroupId={groups.peer_group_id} surveyId={groups.survey_id} categoryId={groups.id}/>
                            ))}
                    </List>
                    <Button>Submit</Button>
        </div>
    )
}
export default CompleteSurveyPage;