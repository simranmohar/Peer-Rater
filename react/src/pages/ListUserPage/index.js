import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../services/api";
import {Chip, Grid, Stack, Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Survey from "../../components/Survey";
import auth from "../../services/auth";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function ListUserPage({}) {
    const location = useLocation()
    const {survey} = location.state
    const {row} = location.state
    const {category} = location.state
    const {rate} = location.state

    const arrayOfRatings = [];
    rate.map(function (rating, index) {
        if (rating.writer_id == auth.getCurrentUserFull().id){
            arrayOfRatings.push(rating)
        }
    });

    const [expanded, setExpanded] = React.useState('0');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    // console.log("category", category)
    // console.log("rate", rate);


    return (row.users.map(function(user, index){
            return(
                <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                        <Grid container justifyContent="flex-start">
                            <Typography style={{textTransform: "capitalize"}}>{user.name}</Typography>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Chip label="Outstanding" color="error"/>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        {category.map(function (cat, index) {
                            let recipientRatings = arrayOfRatings.find(rating => rating.recipient_id == user.id);
                            return (<Survey cat={cat} user={user} rate={rate} arrayOfRatings={recipientRatings} ratingID={cat.id} key={index}/>)
                        })}
                    </AccordionDetails>
                </Accordion>
            );
        })
    )


}

export default ListUserPage;