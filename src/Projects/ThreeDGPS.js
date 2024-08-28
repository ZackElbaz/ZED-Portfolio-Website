// ThreeDGPS.js
import React from 'react';
import { Link } from 'react-router-dom';

function ThreeDGPS() {
  return (
    <div>
      <h1>Welcome to the ThreeDGPS!</h1>
      <p>This is the content of your ThreeDGPS.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default ThreeDGPS;
