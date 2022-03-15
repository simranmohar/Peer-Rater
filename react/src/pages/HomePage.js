import React, { Component } from 'react';
import {AiFillHome} from "react-icons/ai";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const homeStyle = {
    main:{
        textAlign: 'center',
        borderRadius: '25px',
        overflow: 'hidden',
        boxShadow: '1px 1px',
        height: '100px',
        padding: '20px'

       },

    images:{
        borderRadius: '50%',
        width: '100px',
        padding: '1px',
        border: '1px solid #ddd'
    },
    profile:{
        padding: '10px',
        textAlign: 'center'
    },
    card:{
        paddingTop: '20px'
    }
}

const HomePage = () => (
    <>
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <NavBar />
                <div className="container" id="main-container">

                <React.Fragment>
        <div className="">
            <AiFillHome />
            <h1 className="display-4">Home</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <div className="card">
                    <div className="container">
                        <img src={require('../img/blank-profile-picture.png')} />
                        <h4><b>COMP 3975</b></h4>
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                </div>
                <div className="col-sm">
                <div className="card">
                    <div className="container">
                        <img src={require('../img/blank-profile-picture.png')} />
                        <h4><b>COMP 3717</b></h4>
                        <h4><b>John Doe2</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                </div>
                <div className="col-sm">
                <div className="card">
                    <div className="container">
                        <img src={require('../img/blank-profile-picture.png')} />
                        <h4><b>COMP 3522</b></h4>
                        <h4><b>John Doe3</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
                </div>
                <Footer />
            </div>
        </div>
    </>
);

export default HomePage;