// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/footer.css';

import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import NewSurveyPage from './pages/NewSurveyPage';
import NewGroupPage from './pages/NewGroupPage';
import SettingsPage from './pages/SettingsPage';
// Routing stuff
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Groups from "./components/Groups";
import EditProfilePage from "./pages/EditProfilePage";
import People from "./components/People";
import SurveyResults from "./components/SurveyResults";
import SurveyPage from "./pages/SurveyPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage page={<People/>}/>} exact/>
                <Route path="/privacy" element={<HomePage page={<PrivacyPage/>} title ="Privacy"/>} exact/>
                <Route path="/profile" element={<HomePage page={<ProfilePage/>} title ="Profile"/>} exact/>
                <Route path="/newsurvey" element={<HomePage page={<NewSurveyPage/>} title ="New Survey"/>} exact/>
                <Route path="/newgroup" element={<HomePage page={<NewGroupPage/>} title ="New Group"/>} exact/>
                <Route path="/groups" element={<HomePage page={<Groups/>} title ="Groups"/>} exact/>
                <Route path="/surveys" element={<HomePage page={<SurveyPage/>} title ="Survey Result"/>} exact/>
                <Route path="/login" element={<LoginPage/>} exact/>
                <Route path="/signup" element={<SignupPage/>} exact/>
                <Route path="/editprofile" element={<HomePage page={<EditProfilePage/>} title ="Edit Profile"/>} exact/>
                <Route path="*"  element={<HomePage page={<NotFoundPage/>} title ="Page Not Found"/>} exact/>
                <Route path="/settings" element={<HomePage page={<SettingsPage/>} title ="Settings"/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
