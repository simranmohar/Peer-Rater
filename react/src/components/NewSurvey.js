import React from 'react';
import { useLocation } from 'react-router-dom'
import api from '../services/api';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { TextField, createTheme, ThemeProvider, Typography, Button, List, Card, CardMedia, CardContent, CardActions } from '@mui/material';

const Theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'createsurvey'
                    },
                    style: {
                        color: '#5E4AE3',
                        fontSize: '5.2em',
                        fontWeight: 'bold'
                    }
                }
            ]
        }
    }
});

function NewSurvey() {

    const location = useLocation()
    const { peer_group_id } = location.state


    const [survey_id, set_survey_id] = useState({});

    const getNewSurvey = async () => {
        let api_survey_id = await api.addSurvey(peer_group_id)
        set_survey_id(api_survey_id)
        add_categories(api_survey_id, peer_group_id)
    }

    function add_categories(survey_id, peer_group_id) {

        for (var i = 0; i < cards.length; i++) {
            api.addCategory(survey_id, peer_group_id, cards[i].name)
        }
    }


    const questionName = useRef('')
    const [cardCount, setCardCount] = useState(0)
    const [cards, setCards] = useState([]);

    function addCard() {
        setCards([...cards, { id: cardCount, name: questionName.current.value }])
        setCardCount(prevCount => prevCount + 1);
    }

    function deleteCard(index) {
        const list = [...cards];
        const indexToRemove = list.indexOf(index)
        list.splice(indexToRemove, 1);
        setCards(list)
    }

    return (
        <>
            <div>
                <ThemeProvider theme={Theme}>
                    <div style={{ display: 'grid', gridTemplateRows: '40vh 40vh', gridTemplateColumns: '40vw auto' }}>
                        <div style={{ textAlign: 'center', display: 'grid', alignItems: 'center' }}>
                            <div>
                                <Typography variant="createsurvey">Create Survey</Typography>
                                <br />

                            </div>
                        </div>
                        <div style={{ gridArea: '1 / 2 / span 2 / span 1', width: '100%', padding: '2vh', textAlign: 'center', overflow: 'hidden', overflowY: 'scroll' }}>
                            {/* <Typography id="title" variant="createsurvey"></Typography> */}
                            <div id='cardDisplay'>
                                {cards.map((card => (
                                    <Card key={card.id} sx={{ maxWidth: '20vw', margin: '5vh auto auto auto' }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Question {card.id}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {card.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => deleteCard(card.id)}>Delete</Button>
                                        </CardActions>
                                    </Card>
                                )))}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', display: 'grid', alignItems: 'center' }}>
                            <div>
                                <div style={{ marginTop: '5vh' }}>
                                    <TextField id="input-question" inputRef={questionName} label='Question' variant="standard" style={{ width: '20vw', fontSize: '4em' }} />
                                    <br />
                                    <Button sx={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '1vh', textAlign: 'left' }} variant="outlined" onClick={() => addCard()} >
                                        <Typography variant="buttons">
                                            Add Question
                                        </Typography>
                                    </Button>
                                </div>
                                <Button sx={{ paddingLeft: '50px', paddingRight: '50px', marginTop: '9vh', textAlign: 'left' }} variant="outlined" onClick={() => getNewSurvey()} component={Link} to="/groups" >
                                    <Typography variant="buttons">
                                        Submit Survey
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </div>
        </>


    );

}

export default NewSurvey;