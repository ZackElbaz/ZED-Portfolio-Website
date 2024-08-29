// import React, { useEffect, useState } from 'react';

// const projects = [
    // { name: 'BicycleAmbulance', tags: ['medical', 'emergency', 'university'] },
    // { name: 'Boeing737Seat', tags: ['aviation', 'university'] },
    // { name: 'ColouredHalftone', tags: ['art'] },
    // { name: 'FireRiskAssessment', tags: ['medical', 'safety', 'robotics', 'university'] },
    // { name: 'GausticLensGenerator', tags: ['art'] },
    // { name: 'LightbugRTK', tags: ['device', 'DFM'] },
    // { name: 'MechanicalMirror', tags: ['art', 'robotics'] },
    // { name: 'PhysicalGIF', tags: ['art'] },
    // { name: 'RaceTrackerGPS', tags: ['device', 'DFM'] },
    // { name: 'ReactionDiffusion', tags: ['art'] },
    // { name: 'ThreeDGPS', tags: ['device', 'research'] },
    // { name: 'TKRTestDevice', tags: ['robotics', 'research', 'university']  },
//     // Add all other projects with their corresponding types
// ];






// const ProjectBar = ({ currentProject }) => {
//     const [similarProjects, setSimilarProjects] = useState([]);

//     useEffect(() => {
//         const currentProjectType = projects.find(proj => proj.name === currentProject)?.type;

//         if (currentProjectType) {
//             const filteredProjects = projects.filter(proj => proj.type === currentProjectType && proj.name !== currentProject);
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
//                         <button key={index} style={{ margin: '0 10px', padding: '10px', backgroundColor: '#555', color: 'white', border: 'none', cursor: 'pointer' }}
//                                 onClick={() => window.location.href = `/ZED-Portfolio-Website/Projects/${project.name}`}>
//                             {project.name}
//                         </button>
//                     ))}
//                 </>
//             )}
//         </div>
//     );
// };

// export default ProjectBar;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    { name: 'BicycleAmbulance', tags: ['medical', 'emergency', 'university'] },
    { name: 'Boeing737Seat', tags: ['aviation', 'university'] },
    { name: 'ColouredHalftone', tags: ['art'] },
    { name: 'FireRiskAssessment', tags: ['medical', 'safety', 'robotics', 'university'] },
    { name: 'GausticLensGenerator', tags: ['art'] },
    { name: 'LightbugRTK', tags: ['device', 'DFM'] },
    { name: 'MechanicalMirror', tags: ['art', 'robotics'] },
    { name: 'PhysicalGIF', tags: ['art'] },
    { name: 'RaceTrackerGPS', tags: ['device', 'DFM'] },
    { name: 'ReactionDiffusion', tags: ['art'] },
    { name: 'ThreeDGPS', tags: ['device', 'research'] },
    { name: 'TKRTestDevice', tags: ['robotics', 'research', 'university']  },
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
        <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', padding: '10px 0', textAlign: 'center', color: 'white' }}>
            {similarProjects.length > 0 && (
                <>
                    <h3>Similar Projects:</h3>
                    {similarProjects.map((project, index) => (
                        <Link key={index} to={`/Projects/${project.name}`}>
                            <button style={{ margin: '0 10px', padding: '10px', backgroundColor: '#555', color: 'white', border: 'none', cursor: 'pointer' }}>
                                {project.name}
                            </button>
                        </Link>
                    ))}
                </>
            )}
        </div>
    );
};

export default ProjectBar;