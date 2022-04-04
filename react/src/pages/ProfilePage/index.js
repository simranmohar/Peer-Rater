import React from 'react';
import Auth from "../../services/auth";

const profileStyle = {
    main: {
        textAlign: 'center',
        borderRadius: '25px',
        overflow: 'hidden',
        boxShadow: '1px 1px',
        height: '100px',
        padding: '20px'

    },

    images: {
        borderRadius: '50%',
        width: '100px',
        padding: '1px',
        border: '1px solid #ddd'
    },
    profile: {
        padding: '10px',
        textAlign: 'center'
    },
    card: {
        paddingTop: '20px'
    }

}
const BLANK_PROFILE = require('./img/blank-profile-picture.png');
const user = Auth.getCurrentUserFull();
const ProfilePage = () => (
    <>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div style={profileStyle.profile}>

                                            <img style={profileStyle.images}
                                                 src={BLANK_PROFILE} alt={"placeholder profile picture"}/>

                                            <h6>{user.name}</h6>
                                        </div>
                                    </div>
                                    <div style={profileStyle.card} className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{user.email}</h6>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
);

export default ProfilePage;