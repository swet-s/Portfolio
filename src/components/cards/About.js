import React from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Card.css";

const About = ({about}) => {
    const handleCopy = () => {
        navigator.clipboard
            .writeText(about)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };
    
    return (
        <>
            <h2>About Me</h2>
            <div className="card card-large">
                <div className="top-bar">
                    <span className="work-copy" onClick={handleCopy}>
                        <FontAwesomeIcon icon={faCopy} />
                    </span>
                </div>
                <p className="card-description">{about[0]}</p>
                <p className="card-description">{about[1]}</p>
            </div>
        </>
    );
};

export default About;
