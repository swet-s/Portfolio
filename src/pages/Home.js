import React from "react";
import Education from "../components/cards/Education";
import Skill from "../components/cards/Skill";
import About from "../components/cards/About";
import Intro from "../components/cards/Intro";

const Home = () => {
    return (
        <div className="container">
            <Intro />
            <About />
            <div style={{ height: "15px" }}></div>
            <Skill />
            <div style={{ height: "15px" }}></div>
            <Education />
        </div>
    );
};

export default Home;
