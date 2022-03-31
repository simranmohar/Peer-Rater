import React from 'react';
import NavBar from "./NavBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBars,
    faCog, faFaceSurprise,
    faHandPaper,
    faHome,
    faLaughBeam, faListNumeric, faPaperclip,
    faTachometer,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {mainListItems, secondaryListItems} from "../pages/HomePage";
import {AppBar, Drawer} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import ProfilePicture from  "../img/avatars/avatar1.png"


function Sidebar() {
    const drawerWidth = 240;
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));


    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                backgroundColor: '#3576cb',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        }),
    );
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1}}
                >
                    Dashboard
                </Typography>
                <IconButton color="inherit" component={Link} to="/profile">
                        <Avatar alt="Remy Sharp" src={ProfilePicture} />
                </IconButton>
            </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <Link className="d-flex align-items-center justify-content-center text-decoration-none"  to={'/'} style={{color: 'white'}}>
                                         <FontAwesomeIcon className="fa-lg" icon={faListNumeric}/>
                                         <FontAwesomeIcon className="fa-lg" icon={faFaceSurprise}/>
                                     <div className="mx-3">
                                         Peer Rater
                                     </div>
                                 </Link>
                <IconButton style={{color: "white"}} onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
            </List>
        </Drawer>
        </>
        // <>
        //     <div>
        //         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        //             <Link className="sidebar-brand d-flex align-items-center justify-content-center"  to={'/'}>
        //                 <div className="sidebar-brand-icon rotate-n-15">
        //                     <FontAwesomeIcon className="fa-lg" icon={faListNumeric}/>
        //                     <FontAwesomeIcon className="fa-lg" icon={faFaceSurprise}/>
        //                 </div>
        //                 <div className="sidebar-brand-text mx-3">
        //                     Peer Rater
        //                 </div>
        //             </Link>
        //             <hr className="sidebar-divider my-0"/>
        //             {/* Nav Item - Dashboard */}
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="..">
        //                     <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faHome}/>
        //                     <span>Home</span>
        //                 </a>
        //             </li>
        //             {/* Divider */}
        //             <hr className="sidebar-divider"/>
        //             {/* Heading */}
        //             <div className="sidebar-heading">GROUPS</div>
        //             {/* Nav Item - Pages Collapse Menu */}
        //             <li className="nav-item">
        //                 <Link to="/groups" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>All Groups</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <a
        //                     className="nav-link collapsed"
        //                     href="#"
        //                     data-toggle="collapse"
        //                     data-target="#collapseTwo"
        //                     aria-expanded="true"
        //                     aria-controls="collapseTwo"
        //                 >
        //                     <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>Recent Groups</span>
        //                 </a>
        //                 <div
        //                     id="collapseTwo"
        //                     className="collapse"
        //                     aria-labelledby="headingTwo"
        //                     data-parent="#accordionSidebar"
        //                 >
        //                     <div className="bg-white py-2 collapse-inner rounded">
        //                         <h6 className="collapse-header">Recent Groups:</h6>
        //                         <a className="collapse-item" href="buttons.html">
        //                             COMP 3975
        //                         </a>
        //                         <a className="collapse-item" href="cards.html">
        //                             COMP 3717
        //                         </a>
        //                     </div>
        //                 </div>
        //             </li>
        //             {/* Divider */}
        //             <hr className="sidebar-divider"/>
        //             {/* Heading */}
        //             <div className="sidebar-heading">SURVEYS</div>
        //             {/* Nav Item - Utilities Collapse Menu */}
        //             <li className="nav-item">
        //                 <a
        //                     className="nav-link collapsed"
        //                     href="#"
        //                     data-toggle="collapse"
        //                     data-target="#collapseUtilities"
        //                     aria-expanded="true"
        //                     aria-controls="collapseUtilities"
        //                 >
        //                     <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faPaperclip}/>
        //                     <span>Surveys</span>
        //                 </a>
        //                 <div
        //                     id="collapseUtilities"
        //                     className="collapse"
        //                     aria-labelledby="headingUtilities"
        //                     data-parent="#accordionSidebar"
        //                 >
        //                     <div className="bg-white py-2 collapse-inner rounded">
        //                         <h6 className="collapse-header">Surveys:</h6>
        //                         <a className="collapse-item" href="utilities-color.html">
        //                             Survey 1
        //                         </a>
        //                         <a className="collapse-item" href="utilities-border.html">
        //                             Survey 2
        //                         </a>
        //                         <a className="collapse-item" href="utilities-animation.html">
        //                             Survey 3
        //                         </a>
        //                         <a className="collapse-item" href="utilities-other.html">
        //                             Survey 4
        //                         </a>
        //                     </div>
        //                 </div>
        //             </li>
        //             {/* Divider */}
        //             <hr className="sidebar-divider"/>
        //             {/* Heading */}
        //             <div className="sidebar-heading">Pages</div>
        //             <li className="nav-item">
        //                 <Link to="/privacy" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>Privacy</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/profile" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>Profile</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/newsurvey" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>New Survey</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/editprofile" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>Edit Profile</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/settings" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>Settings</span></Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/404" className="nav-link collapsed"><FontAwesomeIcon
        //                     className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
        //                     <span>404</span></Link>
        //             </li>
        //
        //             {/* Divider */}
        //             <hr className="sidebar-divider d-none d-md-block"/>
        //         </ul>
        //     </div>
        // </>
    )
}

export default Sidebar
