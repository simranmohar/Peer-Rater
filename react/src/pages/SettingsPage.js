import React from 'react';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const SettingsPage = () => (
    <>
        <div id="wrapper">
            <SideBar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <NavBar/>
                <div className="container" id="main-container">
                    <>
                                <h1>Settings</h1>
                                <p>Detail settings here.</p>
                    </>
                </div>
                <Footer/>
            </div>
        </div>
    </>
);

export default SettingsPage;