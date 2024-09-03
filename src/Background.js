// Background.js
import React, { useEffect, useRef } from "react";
import StarfieldAnimation from "react-starfield-animation";

export default function Background() {
  const starfieldRef = useRef(null);

  useEffect(() => {
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--starfield-background-color');
    starfieldRef.current.style.backgroundColor = backgroundColor;
  }, []);

  return (
    <div
      ref={starfieldRef}
      style={{
        position: "fixed", // Position the starfield animation relative to the viewport
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure the starfield animation is behind other content
        top: 0,
        left: 0,
        pointerEvents: "none" // Make sure the starfield doesn't interfere with mouse events
      }}
    >
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
        numParticles={800}
        particleSpeed={0}
        dx={0.000000001}
        dy={0.000000001}
      />
    </div>
  );
}
