import React from 'react';
import '../style/auth.css';
import ProfileForm from "../components/ProfileForm";

const CreateProfile = () => (
    <div className="container-flex h-100 min-vh-100">
        <div className="row justify-content-center h-100">
            <div className="col-lg-12 col-md-9 h-100">
                <div className="o-hidden border-0 shadow-lg h-100">
                    <div className="card-body p-0 h-100">
                        <div className="row d-flex h-100">
                            <div className="col-lg-5 d-none d-lg-block bg-image-createProfile">
                            </div>
                            <div className="col-lg-7  col-md-12 p-5 h-100">
                                <div className="m-5">
                                    <div className="text-center mb-5">
                                        <div className="title">PEER RATER</div>
                                    </div>
                                    <div className="mb-1">
                                        <div className="sign-in-text mt-5">Create Profile</div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="sign-in-description mt-3">Please enter your profile details to finish the signup process
                                        </div>
                                    </div>
                                    <ProfileForm/>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default CreateProfile;