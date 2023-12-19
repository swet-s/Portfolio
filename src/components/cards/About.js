import React from "react";
import myData from "../../res/my-data.json";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Card.css";

const About = () => {
    const handleCopy = () => {
        navigator.clipboard
            .writeText(myData.about)
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
                <p className="card-description">{myData.about[0]}</p>
                <p className="card-description">{myData.about[1]}</p>
            </div>
        </>
    );
};

export default About;
