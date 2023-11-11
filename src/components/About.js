import React from "react";
import myData from "../res/my-data.json";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

const About = () => {
    const handleCopy = () => {
        navigator.clipboard
            .writeText(myData.about)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    const aboutText =
        "I am a passionate Software Engineer with experience in various technologies. My skills include Java, TypeScript, React, and more.";

    return (
        <>
            <div className="work card">
                <div className="top-bar">
                    <span className="work-copy" onClick={handleCopy}>
                        <FontAwesomeIcon icon={faCopy} />
                    </span>
                </div>
                <div className="card-header">
                    <h3 className="card-name">About Me</h3>
                </div>
                <p className="card-description">{myData.about}</p>
                <p className="card-description">{aboutText}</p>
            </div>
        </>
    );
};

export default About;
