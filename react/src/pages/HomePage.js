import Footer from "../components/Footer";
import * as React from 'react';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import {ListItemButton, ListItemIcon} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Sidebar from "../components/SideBar";
import {Link} from "react-router-dom";

function ListItemTextWhite({primary}) {
    return (
        <ListItemText primary={primary} style={{color: "white"}}/>
    )
}

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Home"/>
        </ListItemButton>

        <ListItemButton component={Link} to="/groups">
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Groups"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/surveys">
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Surveys"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/privacy">
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Privacy"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/editprofile">
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Profile"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/newsurvey">
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="New Survey"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/settings">
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="Settings"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/404">
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemTextWhite primary="404"/>
        </ListItemButton>
    </React.Fragment>
);

const mdTheme = createTheme();

function HomePage({page, title}) {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Sidebar/>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Container maxWidth="false" sx={{mt: 4, mb: 4}}>
                        <Paper elevation={12} sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                            {page}
                        </Paper>
                    </Container>
                    <Container className={"d-none d-sm-block"} style={{position: "fixed", bottom: 0}}><Footer/></Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default HomePage;