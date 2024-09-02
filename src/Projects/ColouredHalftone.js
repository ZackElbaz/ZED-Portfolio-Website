// ColouredHalftone.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function ColouredHalftone() {
  const currentProject = "ColouredHalftone"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the ColouredHalftone test page!</h1>
      <p>This is the content of your ColouredHalftone.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default ColouredHalftone;