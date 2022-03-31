import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import AuthService from "../services/auth";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

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

    const handleSubmit = async e => {
        let email = form.email;
        let name = form.name;
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
                await AuthService.signup(email, password, name).then(
                    (response) => {
                        // check for token and user already exists with 200
                        //   console.log("Sign up successfully", response);
                        AuthService.setCurrentUser().then(() => {
                            navigate("/");
                            window.location.reload();
                        })
                    },
                    (error) => {
                        console.log(error);
                        setMessage("Email address already in use.");
                    }
                );
            } catch (err) {
                alert("Something went wrong, please try again later.")
                console.log(err);
            }
        }
    }

    const findFormErrors = () => {
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const {name, email, password} = form
        const newErrors = {}

        if (!name || name === '') newErrors.name = 'Name cannot be empty.'

        if (!email || email === '') newErrors.email = 'Email address cannot be empty'
        else if (regex.test(email) === false) newErrors.email = "Invalid email address."


        if (!password || password === '') newErrors.password = 'Password cannot be empty.'
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long'

        return newErrors
    }
    return (

    <Form className="user">
            <Form.Group className="form-group">
                <Form.Control type="text"
                              className={"form-control form-control-user login-box-username"}
                              placeholder="Enter name"
                              aria-describedby={"nameHelp"}
                              onChange={e => setField('name', e.target.value)}
                              isInvalid={!!errors.name}/>

                <Form.Control.Feedback type='invalid' className={"ml-3 mt-2 failure-message"}>{errors.name}</Form.Control.Feedback>
            </Form.Group>


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
            </Form.Group>
            <Button className="btn btn-primary btn-user btn-block signup-button mt-5" variant="primary" type="submit"
                    onClick={handleSubmit}>
                Sign up
            </Button>
        </Form>

    );
}

export default SignupForm;