// GausticLensGenerator.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function GausticLensGenerator() {
  const currentProject = "GausticLensGenerator"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the GausticLensGenerator test page!</h1>
      <p>This is the content of your GausticLensGenerator.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default GausticLensGenerator;