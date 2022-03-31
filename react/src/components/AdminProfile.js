import React from 'react';

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

const AdminProfile = () => (
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
                                                 src={require('../img/blank-profile-picture.png')} alt={"placeholder profile picture"}/>

                                            <h6>John Doe</h6>
                                        </div>
                                    </div>
                                    <div style={profileStyle.card} className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">jdoe@gmail.com</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Age</p>
                                                    <h6 className="text-muted f-w-400">34</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">School</p>
                                                    <h6 className="text-muted f-w-400">BCIT</h6>
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

export default AdminProfile;