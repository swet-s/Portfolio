import React from "react";
import Education from "../components/cards/Education";
import Skill from "../components/cards/Skill";
import About from "../components/cards/About";
import Intro from "../components/cards/Intro";

const Home = ({intro, about, skills, education}) => {
    return (
        <div className="container">
            <Intro intro={intro}/>
            <About about={about}/>
            <div style={{ height: "15px" }}></div>
            <Skill skills={skills}/>
            <div style={{ height: "15px" }}></div>
            <Education education={education}/>
        </div>
    );
};

export default Home;
