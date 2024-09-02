// Boeing737Seat.js
import React from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

function Boeing737Seat() {
  const currentProject = "Boeing737Seat"; // Or dynamically set this

  return (
    <div>
      <ProjectHeader currentProject={currentProject} />
      
      <h1>Welcome to the Boeing737Seat test page!</h1>
      <p>This is the content of your Boeing737Seat.</p>
      
      <ProjectBar currentProject={currentProject} />
    </div>
  );
}

export default Boeing737Seat;