// Dissertation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dissertation() {
  return (
    <div>
      <h1>Welcome to the Dissertation!</h1>
      <p>This is the content of your Dissertation.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default Dissertation;

