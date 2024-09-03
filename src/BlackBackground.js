// BlackBackground.js
import React from 'react';

export default function BlackBackground() {
  return (
    <div
      style={{
        position: 'fixed', // Position the background relative to the viewport
        width: '100%',
        height: '100%',
        backgroundColor: 'black', // Set the background color to black
        zIndex: -1, // Ensure the background is behind other content
        top: 0,
        left: 0,
        pointerEvents: 'none' // Make sure the background doesn't interfere with mouse events
      }}
    />
  );
}
