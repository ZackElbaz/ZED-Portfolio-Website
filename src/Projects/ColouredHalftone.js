// ColouredHalftone.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function ColouredHalftone() {
  return (
    <div>
      <h1>Welcome to the ColouredHalftone!</h1>
      <p>This is the content of your ColouredHalftone.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="ColouredHalftone" />
    </div>
  );
}

export default ColouredHalftone;