// RaceTrackerGPS.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function RaceTrackerGPS() {
  const currentProject = "RaceTrackerGPS"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the RaceTrackerGPS test page!</h1>
      <p>This is the content of your RaceTrackerGPS.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default RaceTrackerGPS;