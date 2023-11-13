import React from "react";
import Project from "../components/cards/Project";
import WorkExperience from "../components/cards/WorkExperience";

const Work = () => {
    return (
        <div className="container">
            <Project />
            <div style={{ height: "15px" }}></div>
            <WorkExperience />
        </div>
    );
};

export default Work;
