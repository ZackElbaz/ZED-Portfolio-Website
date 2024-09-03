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
        <p>This is some additional information about the Bicycle Ambulance project...</p>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default BicycleAmbulance;


