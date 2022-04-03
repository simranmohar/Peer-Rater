import React from 'react';
import './auth.css';
import SignupForm from "../../components/SignupForm";
import { Link } from "react-router-dom";

const SignupPage = () => (
    <div className="container-flex">
        <div className="row justify-content-center h-100 p-0 m-0" style={{ width: '100vw' }}>
            <div className="col-lg-12 col-md-9 m-0 p-0">
                <div className="o-hidden border-0 shadow-lg">
                    <div className="card-body p-0">
                        <div className="row d-flex w-100 m-0">
                            <div className="col-lg-5 d-none d-lg-block bg-image-register" style={{ height: '100vh' }}>
                            </div>
                            <div className="col-lg-7 p-0">
                                <div className="p-5 w-100">
                                    <div className="text-center mb-5">
                                        <div className="title">PEER RATER</div>
                                    </div>
                                    <div className="mb-1 just">
                                        <div className="sign-in-text">Sign Up</div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="sign-in-description">Enter your email and
                                            password to sign up
                                        </div>
                                    </div>
                                    <SignupForm />
                                    <hr />
                                    <div className="text-center mt-5">
                                        <p className="text-muted dont-have-account-message">Already have an account? <a
                                            className="sign-up-link"><Link to="/login">Sign in</Link></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
{/*
<div className="container-flex">
        <div className="row justify-content-center h-100 p-0 m-0" style={{ width: '100vw'}}>
            <div className="col-lg-12 col-md-9 m-0 p-0">
                <div className="o-hidden border-0 shadow-lg">
                    <div className="card-body p-0">
                        <div className="row d-flex w-100 m-0">
                            <div className="col-lg-5 d-none d-lg-block bg-image-login"style={{ height: '100vh'}}>
                            </div>
                            <div className="col-lg-7 p-0">
                                <div className="p-5 w-100">
                                    <div className="text-center mb-5">
                                        <div className="title">PEER RATER</div>
                                    </div>
                                    <div className="mb-1 just">
                                        <div className="sign-in-text">Sign Up</div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="sign-in-description">Enter your email and
                                            password to sign up
                                        </div>
                                    </div>
                                    <SignupForm/>
                                    <hr/>
                                                                        <div className="text-center mt-5">
                                        <p className="text-muted dont-have-account-message">Already have an account? <a
                                                className="sign-up-link"><Link to="/login">Sign in</Link></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    */}
export default SignupPage;