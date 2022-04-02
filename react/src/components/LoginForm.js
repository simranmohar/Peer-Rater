import React, {Component, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AuthService from "../services/auth";

const LoginForm = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({})
    const [passwordNotFoundMessage, setPasswordNotFoundMessage] = useState("");

    const handleSubmit = async e => {

        let email = form.email;
        let password = form.password;
        e.preventDefault()

        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {

            try {
                await AuthService.login(email, password).then(
                    (response) => {
                        // check for token and user already exists with 200
                        //   console.log("Sign up successfully", response);
                        AuthService.setCurrentUser().then(() => {
                            setTimeout(() => navigate("/"), 300);
                        })

                    },
                    (error) => {
                        console.log(error);
                        setPasswordNotFoundMessage("Invalid email or password. Please try again.");
                    }
                );
            } catch (err) {
                setPasswordNotFoundMessage("Something went wrong. Please try again later.");
                console.log(err);
            }
        }
    }

    const findFormErrors = () => {
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const {email, password} = form
        const newErrors = {}

        if (!email || email === '') newErrors.email = 'Email address cannot be empty'
        else if (regex.test(email) === false) newErrors.email = "Invalid email address."


        if (!password || password === '') newErrors.password = 'Password cannot be empty.'
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long'

        return newErrors
    }

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

        return (
            <Form className="user">
                <Form.Group className="form-group">
                    <Form.Control type="email"
                                  className={"form-control form-control-user login-box-username"}
                                  placeholder="Enter email"
                                  aria-describedby={"emailHelp"}
                                  onChange={name => setField('email', name.target.value)}
                                  isInvalid={!!errors.email}/>

                    <Form.Control.Feedback type='invalid' className={"ml-3 mt-2 failure-message"}>{errors.email}</Form.Control.Feedback>
                    <div className="ml-3 mt-2 failure-message">{message ? <p>{message}</p> : null}</div>
                </Form.Group>
                <Form.Group className="form-group" controlId="formPassword">
                    <Form.Control type="password"
                                  className={"form-control form-control-user login-box-password"}
                                  placeholder="Password"
                                  aria-describedby={"passwordHelp"}
                                  onChange={password => setField('password', password.target.value)}
                                  isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type='invalid' className={"ml-3 mt-2 failure-message"}>{errors.password}</Form.Control.Feedback>
                    <div className="ml-3 mt-2 failure-message">{passwordNotFoundMessage ? <p>{passwordNotFoundMessage}</p> : null}</div>

                </Form.Group>
                <Form.Group className="form-group ml-2" controlId="rememberMeSwitch">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="rememberMeSwitch"/>
                        <label className="custom-control-label remember-me-text" htmlFor="rememberMeSwitch">Remember
                            me</label>
                    </div>
                </Form.Group>
                <Button className="btn btn-primary btn-user btn-block login-button mt-5" variant="primary" type="submit"
                        onClick={handleSubmit}>Login
                </Button>
            </Form>
        );
}

export default LoginForm;