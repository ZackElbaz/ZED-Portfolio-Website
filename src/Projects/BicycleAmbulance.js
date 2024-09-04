// // BicycleAmbulance.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function BicycleAmbulance() {
//   return (
//     <div>
//       <h1>Welcome to the BicycleAmbulance!</h1>
//       <p>This is the content of your BicycleAmbulance.</p>
//       <Link to="/force-refresh"> {/* Navigate to ForceRefresh route */}
//         <button>Go to Home Page</button>
//       </Link>
//     </div>
//   );
// }

// export default BicycleAmbulance;














// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProjectBar from '../ProjectBar'; // Import the ProjectBar component

// function BicycleAmbulance() {
//   return (
//     <div>
//       <h1>Welcome to the BicycleAmbulance!</h1>
//       <p>This is the content of your BicycleAmbulance.</p>
      
      // <Link to="/ForceRefresh">
      //   <button>Go to Home Page</button>
      // </Link>
      
//       {/* Add the ProjectBar component and pass the current project name */}
//       <ProjectBar currentProject="BicycleAmbulance" />
//     </div>
//   );
// }

// export default BicycleAmbulance;











// // // BicycleAmbulance.js
// import React from 'react';
// import ProjectHeader from '../ProjectHeader';
// import ProjectBar from '../ProjectBar';

// function BicycleAmbulance() {
//   return (
//     <div>
//       <ProjectHeader />
      
//       <h1>Welcome to the BicycleAmbulance test page!</h1>
//       <p>This is the content of your BicycleAmbulance.</p>
      
//       <ProjectBar currentProject="BicycleAmbulance" />
//     </div>
//   );
// }

// export default BicycleAmbulance;









// import React from 'react';
// import ProjectHeader from '../ProjectHeader';
// import ProjectBar from '../ProjectBar';

// function BicycleAmbulance() {
//   const currentProject = "BicycleAmbulance"; // Or dynamically set this

//   return (
//     <div>
//       <ProjectHeader currentProject={currentProject} />
      
//       <h1>Welcome to the BicycleAmbulance test page!</h1>
//       <p>This is the content of your BicycleAmbulance.</p>
      
//       <ProjectBar currentProject={currentProject} />
//     </div>
//   );
// }

// export default BicycleAmbulance;



import Picture1 from './BicycleAmbulanceImages/Picture1.jpg';
import Picture2 from './BicycleAmbulanceImages/Picture2.jpg';
import Picture3 from './BicycleAmbulanceImages/Picture3.jpg';
import Picture4 from './BicycleAmbulanceImages/Picture4.png';
import ProjectImage from './BicycleAmbulanceImages/ProjectImage.jpg';
import BicycleTrailer from './BicycleAmbulanceImages/BicycleTrailer.png';
import DetailedDesign from './BicycleAmbulanceImages/DetailedDesign.jpg';
import Heat1 from './BicycleAmbulanceImages/Heat1.jpg';
import Heat2 from './BicycleAmbulanceImages/Heat2.jpg';
import Heat3 from './BicycleAmbulanceImages/Heat3.jpg';

// BicycleAmbulance.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';
import './ProjectInfoContainer.css'; // Import the shared CSS file
import BlackBackground from '../BlackBackground'; // Import the new BlackBackground component

function BicycleAmbulance() {
  const projectBarRef = useRef(null);
  const [projectBarHeight, setProjectBarHeight] = useState(60); // Default height

  useEffect(() => {
    if (projectBarRef.current) {
      setProjectBarHeight(projectBarRef.current.offsetHeight);
    }
  }, [projectBarRef.current]);

  const currentProject = "BicycleAmbulance"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarHeight}px` }}>
        <p>In a pair, I designed a trailer, that can be attached to standard bikes, and is capable of safely and comfortably expediting the transport of a person in need of medical attention in the harsh environment of Sub-Saharan Africa. 
        <div className="image-container">
          <img src={Picture1} alt="Heat dissipation calculation" />
          <img src={Picture2} alt="Heat dissipation calculation" />
          <img src={Picture3} alt="Heat dissipation calculation" />
          <img src={Picture4} alt="Heat dissipation calculation" />
        </div>
        <li>Vaccine cooler (whose heat dissipation was calculated using MATLAB and can be seen to the right).</li>
        <li>Enough storage to support the provision of an ad hoc clinic at remote locations. </li>
        <li>The design has countermeasures for location specific eventualities such as the exposure of the patient to heatstroke, rain, dust and mosquitoes.</li> 
        <li>Economic feasibility was extremely important, as the trailer had to be designed to compete in a very low cost market.</li></p>
        <div className="image-container">
          <img src={Heat1} alt="Heat dissipation calculation" />
          <img src={Heat2} alt="Heat dissipation calculation" />
          <img src={Heat3} alt="Heat dissipation calculation" />
        </div>
        <img src={DetailedDesign} alt="Project" style={{ width: '100%', height: 'auto' }} />
        <p>
        <li>I created all the CAD models (using Autodesk Inventor).</li>
        <li>The trailer was designed to be easily and cheaply manufactured using sheet metal whilst remaining extremely light.</li>
        <li>Using as few components as possible, assembly is made not only easy but also cheap.</li>
        <li>This design has many features (explained on the left), but operation of the trailer was ensured to be as rapid as possible in case it needed to be used in an emergency situation.</li>
        <li>With a detachable stretcher and foldable cover, the process of transporting a patient has become exceptionally streamlined, while remaining hygienic and safe for both the patient and rider.</li>
        </p>
        <p>
        <img src={BicycleTrailer} alt="Project" style={{ width: '80%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </p>
        <img src={ProjectImage} alt="Project" style={{ width: '80%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default BicycleAmbulance;


