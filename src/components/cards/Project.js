import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "../Card.css";
import ItemBox from "../boxes/ItemBox";

const Project = ({projects}) => {
    const handleCopy = (project) => {
        let text = `Project Name: ${project.name}\nDescription: ${project.description}\nDuration: ${
            project.duration
        }\nTechStack: ${project.techStack.join(", ")}`;

        navigator.clipboard
            .writeText(text)
            .then(() => alert("Copied to clipboard"))
            .catch((error) => console.error("Failed to copy: ", error));
    };

    return (
        <>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="card card-large">
                    <div className="top-bar">
                        {project.link && (
                            <a href={project.link} className="project-link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} className="project-demo">
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        )}
                        <span className="project-copy" onClick={() => handleCopy(project)}>
                            <FontAwesomeIcon icon={faCopy} />
                        </span>
                    </div>
                    <div className="card-header">
                        <h3 className="card-name">{project.name}</h3>
                        <code className="card-status">{project.duration}</code>
                    </div>
                    <p className="card-description">{project.description}</p>

                    <ItemBox name="TeckStack" data={project.techStack} copy={false}></ItemBox>
                </div>
            ))}
        </>
    );
};

export default Project;
