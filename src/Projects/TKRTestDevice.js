// TKRTestDevice.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function TKRTestDevice() {
  return (
    <div>
      <h1>Welcome to the TKRTestDevice!</h1>
      <p>This is the content of your TKRTestDevice.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="TKRTestDevice" />
    </div>
  );
}

export default TKRTestDevice;

