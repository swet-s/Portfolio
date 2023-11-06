import React from "react";
import myData from "../res/my-data.json";
import "./Project.css";

const Projects = () => {
    const projects = myData.projects;

    return (
        <div className="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
