import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";

class ProfileForm extends Component {
    render() {
        return (
            <Form className="user">
                <Form.Group className="form-group" controlId="firstName">
                    <Form.Control type="name" className={"form-control form-control-user profile-box-textinput"} placeholder="First Name"
                                  aria-describedby={"nameHelp"}/>
                </Form.Group>

                <Form.Group className="form-group" controlId="lastName">
                    <Form.Control type="name" className={"form-control form-control-user profile-box-textinput"} placeholder="Last Name"
                                  aria-describedby={"nameHelp"}/>
                </Form.Group>

                <Form.Group className="form-group" controlId="phoneNumber">
                    <Form.Control type="tel" className={"form-control form-control-user profile-box-textinput"} placeholder="Phone Number"
                                  aria-describedby={"telHelp"}/>
                </Form.Group>

                <Button className="btn btn-primary btn-user btn-block signup-button mt-5" variant="primary" type="submit">
                    Update Profile
                </Button>
            </Form>
        );
    }
}

export default ProfileForm;