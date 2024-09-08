import React from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Card.css";
import { useQuery } from "react-query";
import { fetchJsonData } from "../../api/fetch";

const About = () => {
    const { myData, error, isLoading } = useQuery('fileData', fetchJsonData);

    if (isLoading) return 'Loading...';
    if (error) return `Error: ${error.message}`;
    
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
