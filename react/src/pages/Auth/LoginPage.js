import React from 'react';
import './auth.css';
import LoginForm from "../../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => (
    <div className="container-flex">
        <div className="row justify-content-center h-100 p-0 m-0" style={{ width: '100vw' }}>
            <div className="col-lg-12 col-md-9 m-0 p-0">
                <div className="o-hidden border-0 shadow-lg">
                    <div className="card-body p-0">
                        <div className="row d-flex w-100 m-0">
                            <div className="col-lg-5 d-none d-lg-block bg-image-login" style={{ height: '100vh' }}>
                            </div>
                            <div className="col-lg-7 p-0">
                                <div className="p-5 w-100">
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
                                    <LoginForm />
                                    <hr />
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