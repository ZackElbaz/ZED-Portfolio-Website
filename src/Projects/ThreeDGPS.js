// ThreeDGPS.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function ThreeDGPS() {
  const currentProject = "ThreeDGPS"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the ThreeDGPS test page!</h1>
      <p>This is the content of your ThreeDGPS.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default ThreeDGPS;
