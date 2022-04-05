import React from 'react';
import '../Auth/auth.css';
import ProfileForm from "../../components/ProfileForm";
import authService from '../../services/auth';

function CreateProfile() {
    return (
        <div className="flex-fill">
            <div className="container mt-5">
                <div className="sign-in-text" style={{fontSize: '3.5em', marginTop: '14vh'}}>Hi, {authService.getCurrentUserFull().name}</div>
            </div>
            <div className="container">
                <div className="sign-in-description mt-3" style={{fontSize: '1.25em'}}>This is the profile page :)</div>
            </div>
            <div className="container-fluid">
                <ProfileForm />
            </div>
        </div>
    )
}
export default CreateProfile;
