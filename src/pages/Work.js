import React from "react";
import Project from "../components/cards/Project";
import WorkExperience from "../components/cards/WorkExperience";

const Work = ({projects, workExp}) => {
    return (
        <div className="container">
            <Project projects={projects}/>
            <div style={{ height: "15px" }}></div>
            <WorkExperience workExp={workExp}/>
        </div>
    );
};

export default Work;
