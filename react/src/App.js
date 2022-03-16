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
// Routing stuff
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateProfilePage from "./pages/CreateProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/privacy" element={<PrivacyPage />} exact />
        <Route path="/profilepage" element={<ProfilePage />} exact />
        <Route path="/newsurvey" element={<NewSurveyPage />} exact />
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/createprofile" element={<CreateProfilePage />} exact />

        <Route path="*" element={<NotFoundPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
