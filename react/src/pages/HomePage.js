// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Footer from "../components/Footer";
// import SideBar from "../components/SideBar";
// import NavBar from "../components/NavBar";
import ActiveLastBreadcrumb from "../components/ActiveLastBreadcrumb";
// import {Container, Stack} from "@mui/material";
// import Typography from "@mui/material/Typography";
//
// function HomePage({page, title}) {
//     return (
//         <>
//             <Box sx={{flex: 1}} >
//                 <Grid container spacing={0} >
//                     <Grid item xs="2" zeroMinWidth>
//                         <Box item style={{minHeight: '100vh', overflow: "hidden"}}><SideBar/></Box>
//                     </Grid>
//                     <Grid item zeroMinWidth style={{width: "82vw"}}>
//                         <Stack>
//                             <NavBar/>
//                             <Container maxWidth="false">
//                                 <ActiveLastBreadcrumb/>
//                                 <Typography variant="h4" sx={{mt: 1}}>{title}</Typography>
//                             <Paper elevation={12} sx={{mt: 1, padding: 3, marginBottom: "20px"}}>{page}</Paper>
//                             <Container><Footer/></Container>
//                             </Container>
//                         </Stack>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </>
//     );
// }
//
//
// export default HomePage;


import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {ListItemButton, ListItemIcon} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Sidebar from "../components/SideBar";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


function ListItemTextWhite ({primary}) {
    return (
        <ListItemText primary={primary} style={{color: "white"}}/>
)
}

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "Home"/>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "Groups"/>
        </ListItemButton>
        <ListItemButton href='/newsurvey'>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "Surveys"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "Privacy"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "Profile"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "New Survey"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "New Group"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "Settings"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemTextWhite primary = "404"/>
        </ListItemButton>
    </React.Fragment>
);

const mdTheme = createTheme();

function HomePage({page, title})  {

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
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
                    <Toolbar />
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <ActiveLastBreadcrumb/>
                    </Paper>
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Paper elevation={12} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            {page}
                        </Paper>
                        <Container><Footer/></Container>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default HomePage;