import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";

import "./index.css";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [birth, setBirth] = useState(profile.dateOfBirth);
    const saveProfileClickHandler = () => {
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName:lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: birth
        }
        dispatch(updateProfile(newProfile));
    }
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="fas fa-times wd-edit-profile-x-button"></i>
                    </Link>
                </div>
                <div className="col-11">
                    <span className="wd-edit-profile-title">Edit Profile</span>
                    <Link to="/tuiter/profile">
                        <button onClick={saveProfileClickHandler}
                                className="btn btn-primary fa-pull-right rounded-pill
                                wd-edit-profile-save-button">
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <img src={profile.bannerPicture} className="mt-2 wd-profile-bannerPicture"/>
            <img src={profile.profilePicture} className="rounded-circle wd-profile-avatarPicture"/>

            <div className="mt-3 mb-5 wd-edit-profile-input-box" >
                <label className="text-secondary">First Name</label>
                <div>
                    <input className="wd-edit-profile-input"
                           value={firstName}
                           onChange={(event) => setFirstName(event.target.value)}/>
                </div>
            </div>

            <div className="mb-5 wd-edit-profile-input-box" >
                <label className="text-secondary">Last Name</label>
                <div>
                    <input className="wd-edit-profile-input"
                           value={lastName}
                           onChange={(event) => setLastName(event.target.value)}/>
                </div>
            </div>

            <div className="mb-5 wd-edit-profile-input-box" >
                <label className="text-secondary">Bio</label>
                <div>
                    <textarea className="wd-edit-profile-input"
                              value={bio}
                              onChange={(event) => setBio(event.target.value)}/>
                </div>
            </div>

            <div className="mb-5 wd-edit-profile-input-box" >
                <label className="text-secondary">Location</label>
                <div>
                    <input className="wd-edit-profile-input"
                           value={location}
                           onChange={(event) => setLocation(event.target.value)}/>
                </div>
            </div>

            <div className="mb-5 wd-edit-profile-input-box" >
                <label className="text-secondary">Website</label>
                <div>
                    <input className="wd-edit-profile-input"
                           value={website}
                           onChange={(event) => setWebsite(event.target.value)}/>
                </div>
            </div>

            <div className="mb-5 wd-edit-profile-input-box" >
                <label className="text-secondary">Birth date</label>
                <div>
                    <input className="wd-edit-profile-input"
                           value={birth}
                           onChange={(event) => setBirth(event.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default EditProfileComponent;