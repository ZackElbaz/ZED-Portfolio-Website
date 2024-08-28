// MechanicalMirror.js
import React from 'react';
import { Link } from 'react-router-dom';

function MechanicalMirror() {
  return (
    <div>
      <h1>Welcome to the MechanicalMirror!</h1>
      <p>This is the content of your MechanicalMirror.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default MechanicalMirror;