// ReactionDiffusion.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function ReactionDiffusion() {
  const currentProject = "ReactionDiffusion"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the ReactionDiffusion test page!</h1>
      <p>This is the content of your ReactionDiffusion.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default ReactionDiffusion;