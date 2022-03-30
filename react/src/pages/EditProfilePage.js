import React from 'react';
import '../style/auth.css';
import ProfileForm from "../components/ProfileForm";

function CreateProfile () {
    return(
        <div className="flex-fill">
            <div className="container">
                <div className="sign-in-text">Edit Profile</div>
            </div>
            <div className="container">
                <div className="sign-in-description mt-3">Update your information below </div>
            </div>
            <div className="container-fluid">
                <ProfileForm/>
            </div>
        </div>
    )
}
export default CreateProfile;
