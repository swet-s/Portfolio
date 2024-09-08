import React from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Card.css";
import { useQuery } from "react-query";
import { fetchJsonData } from "../../api/fetch";

const Education = () => {
    const { myData, error, isLoading } = useQuery('fileData', fetchJsonData);

    if (isLoading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const education = myData.education;

    const handleCopy = (education) => {
        let text = `Institute: ${education.institution}\nDuration: ${education.duration}\nDegree: ${education.degree}\nCGPA: ${education.cgpa}`;

        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <>
            <h2>Education</h2>
            {education.map((education, index) => (
                <div key={index} className="card card-large">
                    <div className="top-bar">
                        <span className="work-copy" onClick={() => handleCopy(education)}>
                            <FontAwesomeIcon icon={faCopy} />
                        </span>
                    </div>
                    <div className="card-header">
                        <h3 className="card-name">{education.institution}</h3>
                    </div>

                    <div className="card-header-2">
                        <code className="card-status">{education.duration}</code>
                    </div>

                    <div className="card-header-2">
                        <code className="card-status">{education.degree}</code>
                        <code className="card-status">{education.cgpa}</code>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Education;
