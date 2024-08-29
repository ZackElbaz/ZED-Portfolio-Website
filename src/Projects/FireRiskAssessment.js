// FireRiskAssessment.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

function FireRiskAssessment() {
  return (
    <div>
      <h1>Welcome to the FireRiskAssessment!</h1>
      <p>This is the content of your FireRiskAssessment.</p>

      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>

      {/* Add the ProjectBar component and pass the current project name */}
      <ProjectBar currentProject="FireRiskAssessment" />
    </div>
  );
}

export default FireRiskAssessment;