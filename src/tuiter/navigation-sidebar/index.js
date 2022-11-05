import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {
    HouseDoorFill,
    Hash,
    Asterisk,
    Bell,
    Envelope,
    Bookmark,
    CardList,
    Person,
    ThreeDots
} from 'react-bootstrap-icons';
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="/tuiter" className="list-group-item">Tuiter</Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || !active ?'active':''}`}>
                <HouseDoorFill className="pe-2 pb-1" size={25}/>Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <Hash className="pe-2 pb-1" size={25}/>Explore
            </Link>
            <Link to="/" className="list-group-item">
                <Asterisk className="pe-2 pb-1" size={25}/>Labs
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <Bell className="pe-2 pb-1" size={25}/>Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <Envelope className="pe-2 pb-1" size={25}/>Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <Bookmark className="pe-2 pb-1" size={25}/>Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <CardList className="pe-2 pb-1" size={25}/>Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${(active === 'profile' || active ==='edit-profile') ?'active':''}`}>
                <Person className="pe-2 pb-1" size={25}/> Profile
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <ThreeDots className="pe-2 pb-1" size={25}/>More
            </a>
        </div>
    );
};

export default NavigationSidebar;