// TKRTestDevice.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function TKRTestDevice() {
  const currentProject = "TKRTestDevice"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the TKRTestDevice test page!</h1>
      <p>This is the content of your TKRTestDevice.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default TKRTestDevice;

