// Boeing737Seat.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function Boeing737Seat() {
  return (
    <div>
      <h1>Welcome to the Boeing737Seat!</h1>
      <p>This is the content of your Boeing737Seat.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="Boeing737Seat" />
    </div>
  );
}

export default Boeing737Seat;