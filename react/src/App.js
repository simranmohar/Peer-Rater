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
import SettingsPage from './pages/SettingsPage';
// Routing stuff
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateProfilePage from "./pages/EditProfilePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} exact/>
                <Route path="/privacy" element={<PrivacyPage/>} exact/>
                <Route path="/profilepage" element={<ProfilePage/>} exact/>
                <Route path="/newsurvey" element={<NewSurveyPage/>} exact/>
                <Route path="/login" element={<LoginPage/>} exact/>
                <Route path="/signup" element={<SignupPage/>} exact/>
                <Route path="/editprofile" element={<CreateProfilePage/>} exact/>
                <Route path="*" element={<NotFoundPage/>} exact/>
                <Route path="/settings" element={<SettingsPage/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
