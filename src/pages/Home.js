import React from "react";
import { Link } from "react-router-dom";
import Education from "../components/Education";
import Skill from "../components/Skill";
import About from "../components/About";
import CoinToss from "../components/CoinToss";

const Home = () => {
    return (
        <div className="container">
            <About />
            <div style={{ height: "15px" }}></div>
            <Skill />
            <div style={{ height: "15px" }}></div>
            <Education />
            <div style={{ height: "15px" }}></div>
            <CoinToss />
        </div>
    );
};

export default Home;
