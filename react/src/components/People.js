import * as React from "react";

const  BLANK_PROFILE = require('../pages/ProfilePage/img/blank-profile-picture.png');

function People() {
    return (
        <div className="row">
            <div className="col-sm-3">
                <div className="card">
                    <img src={BLANK_PROFILE}/>
                    <h4><b>COMP 3975</b></h4>
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={BLANK_PROFILE}/>
                    <h4><b>COMP 3717</b></h4>
                    <h4><b>John Doe2</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card">
                    <img src={BLANK_PROFILE}/>
                    <h4><b>COMP 3522</b></h4>
                    <h4><b>John Doe3</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default People;