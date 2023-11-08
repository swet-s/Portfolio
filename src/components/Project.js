import React from "react";
import myData from "../res/my-data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Work.css";

const Project = () => {
    const projects = myData.projects;

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
                <div key={index} className="project card">
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

                    {project.techStack && (
                        <div className="tech-stack">
                            <code className="tech-name">TechStack</code>
                            <div className="tech-list">
                                {project.techStack.map((tech, index) => (
                                    <code key={index}>
                                        {tech}
                                        {index !== project.techStack.length - 1 ? "," : ""}
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

export default Project;
