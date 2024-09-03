// ReactionDiffusion.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';
import './ProjectInfoContainer.css'; // Import the shared CSS file
import BlackBackground from '../BlackBackground'; // Import the new BlackBackground component

function ReactionDiffusion() {
  const projectBarRef = useRef(null);
  const [projectBarHeight, setProjectBarHeight] = useState(60); // Default height

  useEffect(() => {
    if (projectBarRef.current) {
      setProjectBarHeight(projectBarRef.current.offsetHeight);
    }
  }, [projectBarRef.current]);

  const currentProject = "ReactionDiffusion"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarHeight}px` }}>
        <p>This is some additional information about the Bicycle Ambulance project...</p>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default ReactionDiffusion;