// PhysicalGIF.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function PhysicalGIF() {
  const currentProject = "PhysicalGIF"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the PhysicalGIF test page!</h1>
      <p>This is the content of your PhysicalGIF.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default PhysicalGIF;