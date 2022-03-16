import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/Login";
import CreateProfilePage from "./pages/CreateProfile";
import App from "./App";
import HomePage from "./pages/Home";
import PrivacyPage from "./pages/Privacy";
import NotFoundPage from "./pages/NotFound";
import ProfilePage from "./pages/Profile";
import NewSurveyPage from "./pages/NewSurvey";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index  element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} exact />
          <Route path="/profilepage" element={<ProfilePage />} exact />
          <Route path="/newsurvey" element={<NewSurveyPage />} exact />
          <Route path="/login" element={<LoginPage />} exact />
          <Route path="/signup" element={<SignupPage />} exact />
          <Route path="/createprofile" element={<CreateProfilePage />} exact />

          <Route path="*" element={<NotFoundPage />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
