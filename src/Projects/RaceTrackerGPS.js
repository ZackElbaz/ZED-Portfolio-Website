// RaceTrackerGPS.js
import React from 'react';
import { Link } from 'react-router-dom';

function RaceTrackerGPS() {
  return (  
    <div>
      <h1>Welcome to the RaceTrackerGPS!</h1>
      <p>This is the content of your RaceTrackerGPS.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default RaceTrackerGPS;