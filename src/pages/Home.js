import React from "react";
import { Link } from "react-router-dom";
import Education from "../components/cards/Education";
import Skill from "../components/cards/Skill";
import About from "../components/cards/About";

const Home = () => {
    return (
        <div className="container">
            <About />
            <div style={{ height: "15px" }}></div>
            <Skill />
            <div style={{ height: "15px" }}></div>
            <Education />
        </div>
    );
};

export default Home;
