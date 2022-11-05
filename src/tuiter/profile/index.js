import React from "react";
import {useSelector} from "react-redux";
import "./profile.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const profileName = profile.firstName + ' ' + profile.lastName;
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <p className="wd-profile-name-top">{profileName}</p>
                    <p className="wd-profile-tuitNum">{profile.tuitNum} Tuits</p>
                </div>
            </div>
            <img src={profile.bannerPicture} className="mt-2 wd-profile-bannerPicture"/>

            <img src={profile.profilePicture} className="rounded-circle wd-profile-avatarPicture"/>
            <Link to="/tuiter/edit-profile">
                <button className="btn btn-primary fa-pull-right rounded-pill wd-edit-profile-button">
                    Edit Profile
                </button>
            </Link>
            <p className="wd-profile-name-mid">{profileName}</p>
            <p className="wd-profile-tuitNum">{profile.handle}</p>
            <p>{profile.bio}</p>
            <div>
                <i className="fas fa-map-marker-alt me-2"></i>
                <span className="me-4 text-secondary">{profile.location}</span>
                <i className="fas fa-birthday-cake me-2"></i>
                <span className="me-4 text-secondary">Born {profile.dateOfBirth}</span>
                <i className="fas fa-calendar-alt me-2"></i>
                <span className="me-4 text-secondary">Joined {profile.dateJoined}</span>
            </div>
            <div className="mt-2">
                <span className="wd-profile-follow-num">{profile.followingCount}</span>
                <span className="me-4 text-secondary"> Following</span>
                <span className="wd-profile-follow-num">{profile.followersCount}</span>
                <span className="me-4 text-secondary"> Followers</span>
            </div>
        </div>
    )
};

export default ProfileComponent;