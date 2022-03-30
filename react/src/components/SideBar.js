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





function Sidebar() {
    return (
        <>
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center"  to={'/'}>
                        <div className="sidebar-brand-icon rotate-n-15">
                            <FontAwesomeIcon className="fa-lg" icon={faListNumeric}/>
                            <FontAwesomeIcon className="fa-lg" icon={faFaceSurprise}/>
                        </div>
                        <div className="sidebar-brand-text mx-3">
                            Peer Rater
                        </div>
                    </Link>
                    <hr className="sidebar-divider my-0"/>
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <a className="nav-link" href="..">
                            <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faHome}/>
                            <span>Home</span>
                        </a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider"/>
                    {/* Heading */}
                    <div className="sidebar-heading">GROUPS</div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <Link to="/groups" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>All Groups</span></Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                        >
                            <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>Recent Groups</span>
                        </a>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Recent Groups:</h6>
                                <a className="collapse-item" href="buttons.html">
                                    COMP 3975
                                </a>
                                <a className="collapse-item" href="cards.html">
                                    COMP 3717
                                </a>
                            </div>
                        </div>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider"/>
                    {/* Heading */}
                    <div className="sidebar-heading">SURVEYS</div>
                    {/* Nav Item - Utilities Collapse Menu */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseUtilities"
                            aria-expanded="true"
                            aria-controls="collapseUtilities"
                        >
                            <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faPaperclip}/>
                            <span>Surveys</span>
                        </a>
                        <div
                            id="collapseUtilities"
                            className="collapse"
                            aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Surveys:</h6>
                                <a className="collapse-item" href="utilities-color.html">
                                    Survey 1
                                </a>
                                <a className="collapse-item" href="utilities-border.html">
                                    Survey 2
                                </a>
                                <a className="collapse-item" href="utilities-animation.html">
                                    Survey 3
                                </a>
                                <a className="collapse-item" href="utilities-other.html">
                                    Survey 4
                                </a>
                            </div>
                        </div>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider"/>
                    {/* Heading */}
                    <div className="sidebar-heading">Pages</div>
                    <li className="nav-item">
                        <Link to="/privacy" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>Privacy</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>Profile</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/newsurvey" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>New Survey</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/editprofile" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>Edit Profile</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/settings" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>Settings</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/404" className="nav-link collapsed"><FontAwesomeIcon
                            className="fas fa-fw fa-sm mr-2" icon={faUserGroup}/>
                            <span>404</span></Link>
                    </li>

                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block"/>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
