import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
    Chip,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";


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
        theme.palette.mode === 'light'
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

function ResultsCard(ratings, categories, users) {
    let userRatingList = [];
    users.forEach((user) => {
        userRatingList.push({name: user.name, score: getPercentage(ratings, user)});
    })
    let completion = getCompletion(ratings, categories, users.length);
    return (
        <React.Fragment>

            {completion >= users.length ?
                <Accordion align="right">
                    <AccordionSummary>
                        <Grid container justifyContent="flex-start">
                            <Typography style={{textTransform: "capitalize", paddingTop:"0.25em"}}> Survey Results
                                ({completion}/{users.length} completed)
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Chip label="Completed" color="success"/>
                        </Grid>
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

export default function TotalSurveyResults({ratings, categories, users}) {
    return (
        ResultsCard(ratings, categories, users)

    );
}