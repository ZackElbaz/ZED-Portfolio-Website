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

const resizeImagesInLandscapeMode = () => {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;

  const containers = document.querySelectorAll('.image-container');
  containers.forEach(container => {
    const images = container.querySelectorAll('img');
    const gap = 10; // Gap between images in pixels

    if (isLandscape) {
      const availableWidth = container.clientWidth;
      const numImages = images.length;

      if (numImages === 0) return;

      // Set an initial height for the images (temporary value)
      const initialHeight = 200; // Example initial height, can be any value
      let totalWidth = 0;

      // Calculate total width of all images with initial height
      images.forEach(img => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        totalWidth += aspectRatio * initialHeight;
      });

      // Calculate total width required for images plus gaps
      const totalGapWidth = gap * (numImages - 1);
      const availableSpaceForImages = availableWidth - totalGapWidth;

      // Calculate scaling factor
      const scalingFactor = availableSpaceForImages / totalWidth;
      const newHeight = initialHeight * scalingFactor;

      // Apply new height to all images and set width to auto
      images.forEach(img => {
        img.style.height = `${newHeight}px`;
        img.style.width = 'auto'; // Maintain aspect ratio
      });

      container.style.flexDirection = 'row'; // Ensure images are in a row
    } else {
      images.forEach(img => {
        img.style.height = 'auto'; // Reset height
        img.style.width = '100%'; // Full width to fit the container
      });

      container.style.flexDirection = 'column'; // Stack images vertically
    }
  });
};

function BicycleAmbulance() {
  const projectBarRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      resizeImagesInLandscapeMode();
    };

    // Load all images before running resize logic
    const images = document.querySelectorAll('.image-container img');
    let loadedImagesCount = 0;

    if (images.length > 0) {
      images.forEach(img => {
        if (img.complete) {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            setImagesLoaded(true);
          }
        } else {
          img.addEventListener('load', () => {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
              setImagesLoaded(true);
            }
          });
        }
      });
    } else {
      setImagesLoaded(true); // No images to load
    }

    if (imagesLoaded) {
      resizeImagesInLandscapeMode();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded]);

  useEffect(() => {
    // Ensure images are resized on initial load
    resizeImagesInLandscapeMode();
  }, []);


  const currentProject = "BicycleAmbulance"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
        <div className="image-wrapper">
          <img src={ProjectImage} alt="Project" style={{float: 'left', marginLeft: '15px', maxWidth: '35%',height: 'auto'}}/>
          In a pair, I designed a trailer, that can be attached to standard bikes, and is capable of safely and comfortably expediting the transport of a person in need of medical attention in the harsh environment of Sub-Saharan Africa.
          <p>
          <div className="image-container">
            <img src={Picture1} alt="Heat dissipation calculation" />
            <img src={Picture2} alt="Heat dissipation calculation" />
          </div>
          <div className="image-container">
            <img src={Picture3} alt="Heat dissipation calculation" />
            <img src={Picture4} alt="Heat dissipation calculation" />
          </div>
          </p>
        </div>
        <p> 
        
        </p>
        <p>Some of the design's key features are:
        <ul>
        <li>Vaccine cooler (whose heat dissipation was calculated using MATLAB and can be seen to the right).</li>
        <li>Enough storage to support the provision of an ad hoc clinic at remote locations. </li>
        <li>The design has countermeasures for location specific eventualities such as the exposure of the patient to heatstroke, rain, dust and mosquitoes.</li> 
        <li>Economic feasibility was extremely important, as the trailer had to be designed to compete in a very low cost market.</li>
        </ul>
        </p>
        
        <p> Below are some results of heat dissipation tests run in MATLAB:
        <div className="image-container">
          <img src={Heat1} alt="Heat dissipation calculation" />
          <img src={Heat2} alt="Heat dissipation calculation" />
          <img src={Heat3} alt="Heat dissipation calculation" />
        </div>
        </p>
        <img src={DetailedDesign} alt="Project" style={{ width: '100%', height: 'auto' }} />
        <p>
        <ul>
        <li>I created all the CAD models (using Autodesk Inventor).</li>
        <li>The trailer was designed to be easily and cheaply manufactured using sheet metal whilst remaining extremely light.</li>
        <li>Using as few components as possible, assembly is made not only easy but also cheap.</li>
        <li>This design has many features (explained on the left), but operation of the trailer was ensured to be as rapid as possible in case it needed to be used in an emergency situation.</li>
        <li>With a detachable stretcher and foldable cover, the process of transporting a patient has become exceptionally streamlined, while remaining hygienic and safe for both the patient and rider.</li>
        </ul>
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


