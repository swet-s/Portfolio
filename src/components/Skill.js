import React from "react";
import myData from "../res/my-data.json";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

const Skill = () => {
    const skills = myData.skills;

    const handleCopy = (skill) => {
        // let text = `Company: ${work.company}\nDuration: ${work.duration}\nPosition: ${
        //     work.position
        // }\nLocation: ${work.location}\nDescription: ${
        //     work.description
        // }\nTechStack: ${work.techStack.join(", ")}`;
        // navigator.clipboard
        //     .writeText(text)
        //     .then(() => alert("Copied to clipboard"))
        //     .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <>
            <h2>My Skills</h2>
            <div className="work card">
                <div className="top-bar">
                    <span className="work-copy" onClick={() => handleCopy(skills)}>
                        <FontAwesomeIcon icon={faCopy} />
                    </span>
                </div>

                {skills.map(
                    (skill, index) =>
                        skill.name && (
                            <div key={index} className="tech-stack skills">
                                <code className="tech-name capital">{skill.name}</code>
                                <div className="tech-list">
                                    {skill.data.map((tech, index) => (
                                        <code key={index}>
                                            {tech}
                                            {index !== skill.data.length - 1 ? "," : ""}
                                        </code>
                                    ))}
                                </div>
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default Skill;
