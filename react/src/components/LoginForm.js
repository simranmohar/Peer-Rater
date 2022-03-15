import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";

class LoginForm extends Component {
    render() {
        return (
            <Form className="user">
                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Control type="email" className={"form-control form-control-user login-box-username"} placeholder="Enter email"
                    aria-describedby={"emailHelp"}/>
                    <Form.Text className="text-muted ml-2">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="form-group" controlId="formPassword">
                    <Form.Control type="password" className={"form-control form-control-user login-box-password"} placeholder="Password"
                                  aria-describedby={"passwordHelp"}/>
                </Form.Group>
                <Form.Group className="form-group ml-2" controlId="rememberMeSwitch">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="rememberMeSwitch" />
                            <label className="custom-control-label remember-me-text" htmlFor="rememberMeSwitch">Remember me</label>
                    </div>
                </Form.Group>
                <Button className="btn btn-primary btn-user btn-block login-button mt-5" variant="primary" type="login">
                    Login
                </Button>
            </Form>
        );
    }
}

export default LoginForm;