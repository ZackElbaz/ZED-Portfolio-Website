// PhysicalGIF.js
import React from 'react';
import { Link } from 'react-router-dom';

function PhysicalGIF() {
  return (
    <div>
      <h1>Welcome to the PhysicalGIF!</h1>
      <p>This is the content of your PhysicalGIF.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default PhysicalGIF;