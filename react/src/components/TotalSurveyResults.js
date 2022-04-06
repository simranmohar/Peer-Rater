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
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    CircularProgress,
    Fade,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {Skeleton} from "@mui/lab";
import Paper from "@mui/material/Paper";

function getPercentage(rating, user) {
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
    return Math.round(ratingValue / (ratingCount * 5) * 100);
}

function getCompletion(rating, category, size) {
    if (rating.length === 0 || category.length === 0) {
        return 0;
    }
    let calc = (rating.length / category.length) / size;
    return Math.floor(calc);
}

function ResultsCard(ratings, categories, users){
    let userRatingList = [];
    users.forEach((user) => {
        userRatingList.push({name: user.name, score: getPercentage(ratings, user)});
    })
    let completion = getCompletion(ratings, categories, users.length);
    return (
        <React.Fragment>

            {completion === users.length ?
                <Accordion align="right">
                    <AccordionSummary>
                        Survey Results ({completion}/{users.length} completed)
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer style={{padding: 20, paddingTop: 0}}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Score</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userRatingList.map((row) => (
                                        <TableRow
                                            key={row.name}
                                        >
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.score}%</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>

                : null
            }
        </React.Fragment>
    );
}

export default function TotalSurveyResults({ratings, categories, users})  {
    return (
            ResultsCard(ratings, categories, users)

    );
}