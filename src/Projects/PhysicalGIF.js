// PhysicalGIF.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function PhysicalGIF() {
  return (
    <div>
      <h1>Welcome to the PhysicalGIF!</h1>
      <p>This is the content of your PhysicalGIF.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="PhysicalGIF" />
    </div>
  );
}

export default PhysicalGIF;