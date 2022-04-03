// bootstrap stuff
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/footer.css";

import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import NewSurveyPage from "./pages/NewSurveyPage";
import NewGroupPage from "./pages/NewGroupPage";
import SettingsPage from "./pages/SettingsPage";
// Routing stuff
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Groups from "./components/Groups";
import EditProfilePage from "./pages/EditProfilePage";
import People from "./components/People";
import Group from "./components/Group";
import SurveyResults from "./components/SurveyResults";
import SurveyPage from "./pages/SurveyPage";
import HomePageMasonry from "./pages/HomePageMasonry";
import React, {useEffect} from "react";
import UnauthorizedRedirect from "./components/UnauthorizedRedirect";
import GroupPage from "./components/GroupPage";

import auth from "./services/auth";
import SignupPage from "./pages/Auth/SignupPage";
import LoginPage from "./pages/Auth/LoginPage";
import axios from "axios";
import authService from "./services/auth";


const Page = ({
    title,
    children,
    ...props
}) => {

    useEffect(() => (document.title = title));
    // is not private, or is private and current user is present, otherwise redirect.
    let isAllowed = !props.isPrivate || (props.isPrivate && auth.getCurrentUser());

    if (isAllowed){
        if (auth.getCurrentUser() && authService.verifyCurrentUser()){
            axios.defaults.headers.common["authorization"] = `Bearer ${auth.getCurrentUser().access_token}`;
            return children
        }else{
            return children
        }
    }else {
       return <UnauthorizedRedirect/>;
    }
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login"
                    element={
                        <Page
                    title="Login"><LoginPage/></Page>
                    }
                    exact/>
                <Route path="/signup"
                    element={
                        <Page
                    title="Signup"><SignupPage/></Page>
                    }
                    exact/>

                <Route path="/"
                    element={<Page title="Home" isPrivate><HomePage/></Page>}
                    exact>

                    <Route path="/" index
                        element={
                            <Page
                        title="Home" ><GroupPage/></Page>
                        }/>
                    <Route path="/profile"
                        element={
                            <Page
                        isPrivate><ProfilePage/></Page>
                        }
                        exact/>
                    <Route path="/profile"
                        element={
                            <Page title="Profile"
                        isPrivate><ProfilePage/></Page>
                        }
                        exact/>
                    <Route path="/newsurvey"
                        element={
                            <Page
                        isPrivate><NewSurveyPage/></Page>
                        }
                        exact/>
                    <Route path="/newgroup"
                        element={
                            <Page
                        isPrivate><NewGroupPage/></Page>
                        }
                        exact/>
                    <Route path="/groups"
                        element={
                            <Page
                        isPrivate><Groups/></Page>
                        }
                        title="Groups"
                        exact/>
                    <Route path="/surveys"
                        element={
                            <Page
                        isPrivate><SurveyPage/></Page>
                        }
                        title="Surveys"
                        exact/>

                    <Route path="/editprofile"
                        element={
                            <Page
                        title="Edit Profile"
                        isPrivate><EditProfilePage/></Page>
                        }
                        exact/>
                    <Route path="*"
                        element={
                            <Page
                        title="404"><NotFoundPage/></Page>
                        }
                        exact/>
                    <Route path="/settings"
                        element={
                            <Page
                        title="Settings"
                        isPrivate><SettingsPage/></Page>
                        }
                        exact/>
                    <Route path="/grid"
                        element={
                            <Page
                        title="Masonry"
                        isPrivate><HomePageMasonry/></Page>
                        }
                        Grid/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
