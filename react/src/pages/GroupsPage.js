import React, { Component } from 'react';
import {AiFillHome} from "react-icons/ai";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Groups from "../components/Groups";

const GroupsPage = () => (
    <>
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <NavBar />
                <div className="container" id="main-container">

                    <React.Fragment>
                        <div className="">
                            <AiFillHome />
                            <h1 className="display-4">Groups</h1>
                        </div>
                        <Groups/>
                    </React.Fragment>
                </div>
                <Footer />
            </div>
        </div>
    </>
);

export default GroupsPage;