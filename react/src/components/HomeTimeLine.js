import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Button, Card, Typography } from "@mui/material";
import { CardMedia, Paper } from '@mui/material';
import logo from '../img/peerrater.png';
import signup from '../img/undraw_signup.svg';
import peer_group from '../img/undraw_peer_group.svg';
import rate from '../img/undraw_rate.svg';
import survey from '../img/undraw_survey.svg';
import results from '../img/undraw_results.svg';


const cardStyle = {
    card_v1: {
        overflow: 'hidden',
        boxShadow: '0 2px 20px $clr-gray300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 200ms ease-in',
        textAlign: 'center',
    },
    image: {
        height: '18rem',
        width: '18rem',
        objectFit: 'cover',
    },
    title: {
        padding: '1rem',
    },
    description: {
        padding: '0 1rem',
    },
    button: {
        appearance: 'button',
        backfaceVisibility: 'hidden',
        backgroundColor: '#405cf5',
        borderRadius: '6px',
        borderWidth: '0',
        boxShadow: 'rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: 'pointer',
        fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
        fontSize: '100%',
        height: '44px',
        lineHeight: '1.15',
        margin: '12px 0 0',
        outline: 'none',
        overflow: 'hidden',
        padding: '0 25px',
        position: 'relative',
        textAlign: 'center',
        textTransform: 'none',
        transform: 'translateZ(0)',
        transition: 'all .2s,box-shadow .08s ease-in',
        userSelect: 'none',
        touchAction: 'manipulation',
        width: '100%',
    },
    hover: {
        transform: 'scale(1.02)',
        background: '$clr-primary',
        color: 'white',
    },
    parent: {
        width: '300px',
    },
    link: {
        textDecoration: 'none',
    }

}

export default function OutlinedTimeline() {
    return (
        <Timeline position="alternate" sx={{ paddingTop:"50px" }}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary"/>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>

                    <div>
                        <div id="peer_group">
                            <Typography>Sign Up</Typography>
                        </div>
                        <div>
                            <img src={signup} />
                        </div>
                    </div>
                </TimelineContent>

            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>

                    <div>
                        <div id="peer_group">
                            <Typography>Peer Group</Typography>
                        </div>
                        <div>
                            <img src={peer_group} />
                        </div>
                    </div>
                </TimelineContent>

            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>

                    <div>
                        <div id="peer_group">
                            <Typography>Survey</Typography>
                        </div>
                        <div>
                            <img src={survey} />
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>

                    <div>
                        <div id="peer_group">
                            <Typography>Rate</Typography>
                        </div>
                        <div>
                            <img src={rate} />
                        </div>
                    </div>
                </TimelineContent>

            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary"/>
                </TimelineSeparator>
                <TimelineContent>

                    <div>
                        <div id="peer_group">
                            <Typography>View Results</Typography>
                        </div>
                        <div>
                            <img src={results} />
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}