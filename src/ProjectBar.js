// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const projects = [
//     { name: 'BicycleAmbulance', displayName: 'Bicycle Ambulance', tags: ['medical', 'emergency', 'university'] },
//     { name: 'Boeing737Seat', displayName: 'Boeing 737 Seat', tags: ['aviation', 'university'] },
//     { name: 'ColouredHalftone', displayName: 'Coloured Halftone', tags: ['art'] },
//     { name: 'FireRiskAssessment', displayName: 'Fire Risk Assessment', tags: ['medical', 'safety', 'robotics', 'university'] },
//     { name: 'GausticLensGenerator', displayName: 'Gaustic Lens Generator', tags: ['art'] },
//     { name: 'LightbugRTK', displayName: 'Lightbug RTK', tags: ['device', 'DFM'] },
//     { name: 'MechanicalMirror', displayName: 'Mechanical Mirror', tags: ['art', 'robotics'] },
//     { name: 'PhysicalGIF', displayName: 'Physical GIF', tags: ['art'] },
//     { name: 'RaceTrackerGPS', displayName: 'Race Tracker GPS', tags: ['device', 'DFM'] },
//     { name: 'ReactionDiffusion', displayName: 'Reaction Diffusion', tags: ['art'] },
//     { name: 'ThreeDGPS', displayName: '3D GPS', tags: ['device', 'research'] },
//     { name: 'TKRTestDevice', displayName: 'TKR Test Device', tags: ['robotics', 'research', 'university']  },
// ];

// const ProjectBar = ({ currentProject }) => {
//     const [similarProjects, setSimilarProjects] = useState([]);

//     useEffect(() => {
//         const currentProjectTags = projects.find(proj => proj.name === currentProject)?.tags;

//         if (currentProjectTags) {
//             const filteredProjects = projects.filter(proj => 
//                 proj.name !== currentProject && proj.tags.some(tag => currentProjectTags.includes(tag))
//             );

//             const shuffledProjects = filteredProjects.sort(() => 0.5 - Math.random());
//             setSimilarProjects(shuffledProjects.slice(0, 3));
//         }
//     }, [currentProject]);

//     return (
//         <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', padding: '10px 0', textAlign: 'center', color: 'white' }}>
//             {similarProjects.length > 0 && (
//                 <>
//                     <h3>Similar Projects:</h3>
//                     {similarProjects.map((project, index) => (
//                         <Link key={index} to={`/Projects/${project.name}`}>
//                             <button style={{ margin: '0 10px', padding: '10px', backgroundColor: '#555', color: 'white', border: 'none', cursor: 'pointer' }}>
//                                 {project.displayName}
//                             </button>
//                         </Link>
//                     ))}
//                 </>
//             )}
//         </div>
//     );
// };

// export default ProjectBar;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectBar.css';

const projects = [
    { name: 'BicycleAmbulance', displayName: 'Bicycle Ambulance', tags: ['medical', 'emergency', 'university'] },
    { name: 'Boeing737Seat', displayName: 'Boeing 737 Seat', tags: ['aviation', 'university'] },
    { name: 'ColouredHalftone', displayName: 'Coloured Halftone', tags: ['art'] },
    { name: 'FireRiskAssessment', displayName: 'Fire Risk Assessment', tags: ['medical', 'safety', 'robotics', 'university'] },
    { name: 'GausticLensGenerator', displayName: 'Gaustic Lens Generator', tags: ['art'] },
    { name: 'LightbugRTK', displayName: 'Lightbug RTK', tags: ['device', 'DFM'] },
    { name: 'MechanicalMirror', displayName: 'Mechanical Mirror', tags: ['art', 'robotics'] },
    { name: 'PhysicalGIF', displayName: 'Physical GIF', tags: ['art'] },
    { name: 'RaceTrackerGPS', displayName: 'Race Tracker GPS', tags: ['device', 'DFM'] },
    { name: 'ReactionDiffusion', displayName: 'Reaction Diffusion', tags: ['art'] },
    { name: 'ThreeDGPS', displayName: '3D GPS', tags: ['device', 'research'] },
    { name: 'TKRTestDevice', displayName: 'TKR Test Device', tags: ['robotics', 'research', 'university']  },
];

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

