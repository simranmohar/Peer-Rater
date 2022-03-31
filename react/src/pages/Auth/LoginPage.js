import React from 'react';
import LoginForm from "../../components/LoginForm";
import './auth.css';
import {Link} from "react-router-dom";

const LoginPage = () => (
    <div className="container-flex h-100">
        <div className="row justify-content-center h-100">
            <div className="col-lg-12 col-md-9 h-100">
                <div className="o-hidden border-0 shadow-lg h-100">
                    <div className="card-body p-0 h-100">
                        <div className="row d-flex h-100">
                            <div className="col-lg-5 d-none d-lg-block bg-image-login">
                            </div>
                            <div className="col-lg-7 p-5 h-100">
                                <div className="p-5">
                                    <div className="text-center mb-5">
                                        <div className="title">PEER RATER</div>
                                    </div>
                                    <div className="mb-1">
                                        <div className="sign-in-text">Sign in</div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="sign-in-description">Enter your email and
                                            password to sign In
                                        </div>
                                    </div>
                                    <LoginForm/>
                                    <hr/>
                                    <div className="text-center mb-2">

                                        <Link to="/forgotpassword" className="sign-up-link">Forgot Password?</Link>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted dont-have-account-message">Don't have an
                                            account? <Link to="/signup" className="sign-up-link">Sign up</Link></p>
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

export default LoginPage;