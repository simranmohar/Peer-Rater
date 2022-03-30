import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useLocation, useNavigate} from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

function ActiveLastBreadcrumb() {
    const pathNames = useLocation().pathname.split('/').filter(x => x)
    const navigate = useNavigate();
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb" style={{textTransform: 'capitalize'}} separator={<NavigateNextIcon fontSize="small"/>}>
                <Link underline="hover" color="inherit" onClick={() => navigate('/')} fontSize={"large"}>
                    <HomeIcon sx={{ mr: 2 }} fontSize="large" />
                    Home
                </Link>

                {pathNames.map((name, index) => {
                    const routTo = `/${pathNames.slice(0, index + 1).join("/")}`
                    const isLast = index === pathNames.length - 1
                    return isLast ? (<Typography key={index} color="text.primary" fontSize={"large"}>{name}</Typography>) : ((
                        <Link key={index} onClick={() => navigate(routTo)}>{name}</Link>))
                })}
            </Breadcrumbs>
        </div>
    );
}

export default ActiveLastBreadcrumb;