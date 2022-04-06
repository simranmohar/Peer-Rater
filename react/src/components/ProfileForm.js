import React, { Component, useEffect } from 'react';
import {Button, Form} from "react-bootstrap";
import authService from '../services/auth';

class ProfileForm extends Component {

    render() {
        return (
            <Form className="user text-center">
                <Form.Group className="form-group w-50 mx-auto" controlId="firstName" style={{paddingTop: '5vh', paddingBottom: '1vh'}}>
                    <Form.Control type="name" className={"form-control form-control-user profile-box-textinput"} placeholder={authService.getCurrentUserFull().name}
                                  aria-describedby={"nameHelp"} disabled={true}/>
                </Form.Group>

                <Form.Group className="form-group w-50 mx-auto" controlId="lastName" style={{paddingTop: '1vh', paddingBottom: '1vh'}}>
                    <Form.Control type="name" className={"form-control form-control-user profile-box-textinput"} placeholder={authService.getCurrentUserFull().email}
                                  aria-describedby={"nameHelp"} disabled={true}/>
                </Form.Group>

                <Form.Group className="form-group w-50 mx-auto" controlId="phoneNumber" style={{paddingTop: '1vh', paddingBottom: '1vh'}}>
                    <Form.Control type="tel" className={"form-control form-control-user profile-box-textinput"} placeholder= {`Account created: `+ authService.getCurrentUserFull().created_at.substring(0, 10)}
                                  aria-describedby={"telHelp"} disabled={true}/>
                </Form.Group>

                {/* <Button className="btn btn-primary btn-user btn-block signup-button mt-5 w-25 mx-auto" variant="primary" type="submit">
                    Update Profile
                </Button> */}
            </Form>
        );
    }
}

export default ProfileForm;