// LightbugRTK.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function LightbugRTK() {
  const currentProject = "LightbugRTK"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the LightbugRTK test page!</h1>
      <p>This is the content of your LightbugRTK.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default LightbugRTK;