import React from 'react';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PrivacyPage = () => (
    <>
        <div id="wrapper">
            <SideBar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <NavBar/>
                <div className="container" id="main-container">
                    <React.Fragment>
                                <h1>Privacy Policy</h1>
                                <p>Use this page to detail your site's privacy policy.</p>
                    </React.Fragment>
                </div>
                <Footer/>
            </div>
        </div>
    </>
);

export default PrivacyPage;