import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening"
import "./index.css";


const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    )
};

export default HomeComponent;