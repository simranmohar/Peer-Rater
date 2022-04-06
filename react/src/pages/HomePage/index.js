import Footer from "../../components/Footer";
import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {ListItemButton, ListItemIcon} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Sidebar from "../../components/SideBar";
import {Link, Outlet} from "react-router-dom";

function ListItemTextWhite({primary}) {
    return (
        <ListItemText primary={primary}
            style={
                {color: "white"}
            }/>
    )
}

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link}
            to="/">
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Home"/>
        </ListItemButton>

        <ListItemButton component={Link}
            to="/groups">
            <ListItemIcon>
                <GroupIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Groups"/>
        </ListItemButton>
    </React.Fragment>
);

const mdTheme = createTheme();

function HomePage({title}) {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={
                {display: 'flex'}
            }>
                <CssBaseline/>
                <Sidebar/>
                <Box component="main"
                    sx={
                        {
                            backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto'
                        }
                }>
                    <Toolbar/>
                    <Container maxWidth="false"
                        sx={
                            {
                                mt: 4,
                                mb: 4
                            }
                    }>
                        <Outlet/>
                    </Container>

                    <Footer/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default HomePage;
