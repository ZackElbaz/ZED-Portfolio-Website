// ReactionDiffusion.js
import React from 'react';
import { Link } from 'react-router-dom';

function ReactionDiffusion() {
  return (
    <div>
      <h1>Welcome to the ReactionDiffusion!</h1>
      <p>This is the content of your ReactionDiffusion.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default ReactionDiffusion;