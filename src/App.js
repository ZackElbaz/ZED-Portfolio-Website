import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ForceRefresh from './ForceRefresh';
import LightbugRTK from './Projects/LightbugRTK';
import TKRTestDevice from './Projects/TKRTestDevice';
import BicycleAmbulance from './Projects/BicycleAmbulance';
import Boeing737Seat from './Projects/Boeing737Seat';
import ThreeDGPS from './Projects/ThreeDGPS';
import RaceTrackerGPS from './Projects/RaceTrackerGPS';
import FireRiskAssessment from './Projects/FireRiskAssessment';
import PhysicalGIF from './Projects/PhysicalGIF';
import ReactionDiffusion from './Projects/ReactionDiffusion';
import MechanicalMirror from './Projects/MechanicalMirror';
import ColouredHalftone from './Projects/ColouredHalftone';
import CausticLensGenerator from './Projects/CausticLensGenerator';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ForceRefresh" element={<ForceRefresh />} />
        <Route path="/Projects/LightbugRTK" element={<LightbugRTK />} />
        <Route path="/Projects/TKRTestDevice" element={<TKRTestDevice />} />
        <Route path="/Projects/BicycleAmbulance" element={<BicycleAmbulance />} />
        <Route path="/Projects/Boeing737Seat" element={<Boeing737Seat />} />
        <Route path="/Projects/ThreeDGPS" element={<ThreeDGPS />} />
        <Route path="/Projects/RaceTrackerGPS" element={<RaceTrackerGPS />} />
        <Route path="/Projects/FireRiskAssessment" element={<FireRiskAssessment />} />
        <Route path="/Projects/PhysicalGIF" element={<PhysicalGIF />} />
        <Route path="/Projects/ReactionDiffusion" element={<ReactionDiffusion />} />
        <Route path="/Projects/MechanicalMirror" element={<MechanicalMirror />} />
        <Route path="/Projects/ColouredHalftone" element={<ColouredHalftone />} />
        <Route path="/Projects/CausticLensGenerator" element={<CausticLensGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;





// change ForceRefresh.js
// git add .
// git commit -m "Newest version"
// git push origin main
// npm run deploy