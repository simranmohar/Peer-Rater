import React from 'react';
import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
const SideBar = () => (
    <>
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* Sidebar - Brand */}
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href=".."
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon className="fa-lg" icon={faListNumeric} />
                    <FontAwesomeIcon className="fa-lg" icon={faFaceSurprise} />
                </div>
                <div className="sidebar-brand-text mx-3">
                    Peer Rater
                </div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <a className="nav-link" href="..">
                    <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faHome} />
                    <span>Home</span>
                </a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">GROUPS</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link to="/groups" className="nav-link collapsed"><FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faUserGroup} />
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
                    <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faUserGroup} />
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
            <hr className="sidebar-divider" />
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
                    <FontAwesomeIcon className="fas fa-fw fa-sm mr-2" icon={faPaperclip} />
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
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Addons</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                >
                    <i className="fas fa-fw fa-folder" />
                    <span>Pages</span>
                </a>
                <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingPages"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">
                            Login
                        </a>
                        <a className="collapse-item" href="register.html">
                            Register
                        </a>
                        <a className="collapse-item" href="forgot-password.html">
                            Forgot Password
                        </a>
                        <div className="collapse-divider" />
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">
                            404 Page
                        </a>
                        <a className="collapse-item" href="blank.html">
                            Blank Page
                        </a>
                    </div>
                </div>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Charts</span>
                </a>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span>Tables</span>
                </a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
        </ul>

    </>
);
export default SideBar;
