// GausticLensGenerator.js
import React from 'react';
import { Link } from 'react-router-dom';

function GausticLensGenerator() {
  return (
    <div>
      <h1>Welcome to the GausticLensGenerator!</h1>
      <p>This is the content of your GausticLensGenerator.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default GausticLensGenerator;