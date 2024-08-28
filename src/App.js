import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LightbugRTK from './Projects/LightbugRTK';
import Dissertation from './Projects/Dissertation';
import ForceRefresh from './ForceRefresh';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/force-refresh" element={<ForceRefresh />} />
        <Route path="/Projects/LightbugRTK" element={<LightbugRTK />} />
        <Route path="/Projects/Dissertation" element={<Dissertation />} />
      </Routes>
    </Router>
  );
}

export default App;






// git add .
// git commit -m "Describe the changes you made"
// git push origin main
// npm run deploy
