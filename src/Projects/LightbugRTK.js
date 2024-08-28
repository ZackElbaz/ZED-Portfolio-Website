import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function LightbugRTK() {
  return (
    <div>
      <h1>Welcome to the LightbugRTK!</h1>
      <p>This is the content of your LightbugRTK.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default LightbugRTK;