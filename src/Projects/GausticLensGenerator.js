// GausticLensGenerator.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function GausticLensGenerator() {
  return (
    <div>
      <h1>Welcome to the GausticLensGenerator!</h1>
      <p>This is the content of your GausticLensGenerator.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="GausticLensGenerator" />
    </div>
  );
}

export default GausticLensGenerator;