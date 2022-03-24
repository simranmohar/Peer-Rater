import React from 'react';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewSurvey from "../components/NewSurvey";

//code transferred to component**

const NewSurveyPage = () => (
    <>
        <div id="wrapper">
            <SideBar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <NavBar/>
                <div className="container" id="main-container">

                    <React.Fragment>

                        <NewSurvey/>

                    </React.Fragment>
                </div>
                <Footer/>
            </div>
        </div>
    </>

)
export default NewSurveyPage;