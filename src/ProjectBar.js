import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectBar.css';
import { projects } from './projectsData'; // Import the project data

const ProjectBar = ({ currentProject }) => {
    const [similarProjects, setSimilarProjects] = useState([]);

    useEffect(() => {
        const currentProjectTags = projects.find(proj => proj.name === currentProject)?.tags;

        if (currentProjectTags) {
            const filteredProjects = projects.filter(proj => 
                proj.name !== currentProject && proj.tags.some(tag => currentProjectTags.includes(tag))
            );

            const shuffledProjects = filteredProjects.sort(() => 0.5 - Math.random());
            setSimilarProjects(shuffledProjects.slice(0, 3));
        }
    }, [currentProject]);

    return (
        <div className="project-bar">
            <div className="project-bar-content">
                <h3 className="similar-projects-title">Similar Projects:</h3>
                <div className="project-buttons-container">
                    {similarProjects.map((project, index) => (
                        <Link key={index} to={`/Projects/${project.name}`}>
                            <button className="project-button">
                                {project.displayName}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectBar;

