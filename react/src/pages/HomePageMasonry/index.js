import Footer from "../../components/Footer";
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
import Sidebar from "../../components/SideBar";
import {Link} from "react-router-dom";
import Masonry from '@mui/lab/Masonry';
import People from "../../components/People";
import Groups from "../../components/Groups";
import NewSurvey from "../../components/NewSurvey";
import GroupPage from "../../components/GroupPage";
import SurveyPage from "../SurveyPage";

const heights = (
    <>
        <Paper elevation={12} sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <GroupPage/>
        </Paper>

        <Paper elevation={12} sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <Groups/>
        </Paper>

        <Paper elevation={12} sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <NewSurvey/>
        </Paper>

        <Paper elevation={12} sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
            <SurveyPage/>
        </Paper>

    </>
);


function HomePageMasonry({page, title}) {
    return (
        <Masonry columns={{ xs: 1, sm: 1, lg:2 }} spacing={5}>
            {heights}
        </Masonry>
    );
}

export default HomePageMasonry;