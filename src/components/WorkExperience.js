import React from "react";
import myData from "../res/my-data.json";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Work.css";

const WorkExperience = () => {
    const workExp = myData.workExp;

    const handleCopy = (work) => {
        let text = `Company: ${work.company}\nDuration: ${work.duration}\nPosition: ${
            work.position
        }\nLocation: ${work.location}\nDescription: ${
            work.description
        }\nTechStack: ${work.techStack.join(", ")}`;

        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <>
            <h2>Work Experience</h2>
            {workExp.map((work, index) => (
                <div key={index} className="work card">
                    <div className="top-bar">
                        <span className="work-copy" onClick={() => handleCopy(work)}>
                            <FontAwesomeIcon icon={faCopy} />
                        </span>
                    </div>
                    <div className="card-header">
                        <h3 className="card-name">{work.company}</h3>
                        <code className="card-status">{work.duration}</code>
                    </div>
                    <div className="card-header-2">
                        <code className="card-status">{work.position}</code>
                        <code className="card-status">{work.location}</code>
                    </div>
                    <p className="card-description">{work.description}</p>

                    {work.techStack && (
                        <div className="tech-stack">
                            <code className="tech-name">TechStack</code>
                            <div className="tech-list">
                                {work.techStack.map((tech, index) => (
                                    <code key={index}>
                                        {tech}
                                        {index !== work.techStack.length - 1 ? "," : ""}
                                    </code>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default WorkExperience;
