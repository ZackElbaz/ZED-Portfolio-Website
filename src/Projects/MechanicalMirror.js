// MechanicalMirror.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function MechanicalMirror() {
  const currentProject = "MechanicalMirror"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the MechanicalMirror test page!</h1>
      <p>This is the content of your MechanicalMirror.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default MechanicalMirror;