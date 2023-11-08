import React from "react";
import Project from "../components/Project";
import WorkExperience from "../components/WorkExperience";

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
