// RaceTrackerGPS.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function RaceTrackerGPS() {
  return (
    <div>
      <h1>Welcome to the RaceTrackerGPS!</h1>
      <p>This is the content of your RaceTrackerGPS.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="RaceTrackerGPS" />
    </div>
  );
}

export default RaceTrackerGPS;