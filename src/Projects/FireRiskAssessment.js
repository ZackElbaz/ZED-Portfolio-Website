// FireRiskAssessment.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function FireRiskAssessment() {
  const currentProject = "FireRiskAssessment"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the FireRiskAssessment test page!</h1>
      <p>This is the content of your FireRiskAssessment.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default FireRiskAssessment;