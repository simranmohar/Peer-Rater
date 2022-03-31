import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useLocation, useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function ActiveLastBreadcrumb() {
    const pathNames = useLocation().pathname.split('/').filter(x => x)
    const navigate = useNavigate();
    return (
        <div role="presentation" >
            <Breadcrumbs aria-label="breadcrumb" style={{textTransform: 'capitalize', color: "rgba(0, 0, 0, 0.54)"}} separator="/">
                <HomeIcon sx={{ mr: 0, mb: "3px" }} fontSize="small" />
                <Link underline="hover" onClick={() => navigate('/')} fontSize={"small"}>
                    <Typography fontSize={"small"}>Home</Typography>
                </Link>
                {pathNames.map((name, index) => {
                    const routTo = `/${pathNames.slice(0, index + 1).join("/")}`
                    const isLast = index === pathNames.length - 1
                    return isLast ? (<Typography key={index} fontSize={"small"}>{name}</Typography>) : ((
                        <Link key={index} onClick={() => navigate(routTo)}>{name}</Link>))
                })}
            </Breadcrumbs>
        </div>
    );
}

export default ActiveLastBreadcrumb;