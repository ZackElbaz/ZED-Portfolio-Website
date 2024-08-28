// ColouredHalftone.js
import React from 'react';
import { Link } from 'react-router-dom';

function ColouredHalftone() {
  return (
    <div>
      <h1>Welcome to the ColouredHalftone!</h1>
      <p>This is the content of your ColouredHalftone.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default ColouredHalftone;