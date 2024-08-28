// TKRTestDevice.js
import React from 'react';
import { Link } from 'react-router-dom';

function TKRTestDevice() {
  return (
    <div>
      <h1>Welcome to the TKRTestDevice!</h1>
      <p>This is the content of your TKRTestDevice.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default TKRTestDevice;

