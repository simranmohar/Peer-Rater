import React from 'react';
import Container from '@mui/material/Container';

const containerstyle = {
    position: "fixed",
    bottom: 0
};
const Footer = () => (

    <>
        <Container className={"d-none d-sm-block"}
            style={containerstyle}>
            <span className="lead text-muted footer">© {new Date().getFullYear()}
                made with
                <p className="love">♥</p>
                by BCIT CST students
            </span>
        </Container>
    </>
);
export default Footer;
