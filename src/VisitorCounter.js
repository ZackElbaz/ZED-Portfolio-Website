// VisitorCounter.js
import React, { useEffect, useState } from "react";
import "./VisitorCounter.css";

export default function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Loading from localStorage
  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 2000;
    setVisitorCount(storedVisits + 1);
  }, []);

  // Saving in localStorage
  useEffect(() => {
    localStorage.setItem("visitCounter", visitorCount);
  }, [visitorCount]);

  return (
    <div className="App">
      <WelcomeMessage visitorCount={visitorCount} />
    </div>
  );
}

function WelcomeMessage({ visitorCount }) {
  return (
    <h1>
      Hello, I'm Zack, welcome to my website! You're visitor{" "} <span style={{ color: "#ff7300" }}>{visitorCount}</span>, have fun exploring!
    </h1>
  );
}