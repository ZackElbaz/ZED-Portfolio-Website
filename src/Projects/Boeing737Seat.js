// Boeing737Seat.js
import React from 'react';
import { Link } from 'react-router-dom';

function Boeing737Seat() {
  return (
    <div>
      <h1>Welcome to the Boeing737Seat!</h1>
      <p>This is the content of your Boeing737Seat.</p>
      <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default Boeing737Seat;