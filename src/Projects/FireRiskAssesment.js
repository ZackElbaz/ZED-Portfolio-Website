// FireRiskAssesment.js
import React from 'react';
import { Link } from 'react-router-dom';

function FireRiskAssesment() {
  return (  
    <div>
      <h1>Welcome to the FireRiskAssesment!</h1>
      <p>This is the content of your FireRiskAssesment.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default FireRiskAssesment;