// // Boeing737Seat.js
// import AirplaneLayoutConcept from './Boeing737SeatImages/Airplane Layout Concept.png';
// import BaseDevelopment from './Boeing737SeatImages/Base Development.png';
// import ConceptDesign1 from './Boeing737SeatImages/Concept Design 1.png';
// import ConceptDesign2 from './Boeing737SeatImages/Concept Design 2.png';
// import ConceptDesign3 from './Boeing737SeatImages/Concept Design 3.png';
// import ExplodedPartsView from './Boeing737SeatImages/Exploded Parts View.png';
// import ExplodedView from './Boeing737SeatImages/ExplodedView.png';
// import FinalDesignSketch from './Boeing737SeatImages/Final Design Sketch.png';
// import FinalRender from './Boeing737SeatImages/Final Render.png';
// import Key from './Boeing737SeatImages/Key.jpg';
// import MechanismDesign from './Boeing737SeatImages/Mechanism Design.png';


// import React, { useEffect, useRef, useState } from 'react';
// import ProjectHeader from '../ProjectHeader';
// import ProjectBar from '../ProjectBar';
// import './ProjectInfoContainer.css'; // Import the shared CSS file
// import BlackBackground from '../BlackBackground'; // Import the new BlackBackground component

// function Boeing737Seat() {
//   const projectBarRef = useRef(null);
//   const [projectBarHeight, setProjectBarHeight] = useState(60); // Default height

//   useEffect(() => {
//     if (projectBarRef.current) {
//       setProjectBarHeight(projectBarRef.current.offsetHeight);
//     }
//   }, [projectBarRef.current]);

//   const currentProject = "Boeing737Seat"; // Or dynamically set this

//   return (
//     <div className="page-container">
//       <BlackBackground /> {/* Use BlackBackground component here */}
//       <ProjectHeader currentProject={currentProject} />
      
//       {/* Project Content */}
//       <div className="project-info-box" style={{ bottom: `${projectBarHeight}px` }}>
//         <p>This was my first design project at university, and invovled redesigning a long-haul economy seat for a Boeing 777-300. I was encouraged to redesign the cabin layout to maximise profits whilst considering passenger comfort, .</p>
//         <p>The aim of creating this seat, was to reduce manufacture, assembly, and material costs as well as reduce the plane fuel costs by reducing the seat weight where possible. The seat did still fulfil all standard safety requirements.</p>
//         <p>This was my first time designing a new product. I started designing iteratively, documenting all my progress in a project notebook. You can see some of the initial sketches designing the Headrest, Armrest and Under-seat Barrier:</p>
//         <p>
//         <div className="image-container">
//           <img src={ConceptDesign3} alt="Heat dissipation calculation" />
//           <img src={ConceptDesign1} alt="Heat dissipation calculation" />
//           <img src={ConceptDesign2} alt="Heat dissipation calculation" />
//         </div>
//         </p>
//         <p>
//         The seat also needed a compact and adjustable reclining mechanism. I designed a few such mechanisms which can be seen below. Using a Pugh selection Matrix, I converged on a final seat concept.
//         <img src={MechanismDesign} alt="Project" style={{ width: '100%', height: 'auto' }}/>
//         </p>
//         <p>
//         <div className="image-wrapper">
//           <img src={FinalDesignSketch} alt="Project" style={{float: 'left', marginLeft: '15px', maxWidth: '35%',height: 'auto'}}/>
//           The final design concept can be seen here to the left/right. it adheres to the brief while maximising passenger comfort.
//         </div>
//         </p>
//         <p>
//           After making some preliminary CAD parts, I hand calculated the forces through the chair legs during a crash. Considering a 99th%-ile human weight, I redesigned the legs to survive a crash with minimal deflection, and improved them further using generative design techniques.
//           <img src={BaseDevelopment} alt="Project" style={{ width: '90%', height: 'auto' }}/>
//         </p>

//         <div className="image-container">
//           <img src={FinalRender} alt="Heat dissipation calculation" />
//           <img src={ExplodedPartsView} alt="Heat dissipation calculation" />
//         </div>

//           <ul>
//           <li>The design is ergonomic, more compact, uses significantly fewer mechanical parts, and is still capable of being attached to standardised airplane seat tracks.</li>
//           <li>The design is modular.</li>
//           <li>Assembly is made exceptionally easy by removing the need for securing individual components. They can simply be slid on to two rails and secured laterally at the ends.</li> 
//           <li>Created a MATLAB code to calculate the optimal ratio of seats to facilities (to fulfil standard health and safety requirements).</li>
//           <li>The code maximises the number of seats in the cabin layout (shown below), whilst still ensuring that each passenger has easy access to all facilities.</li>
//           </ul>
//         <div className="image-container">
//          <img src={Key} alt="Heat dissipation calculation"  />
//          <img src={AirplaneLayoutConcept} alt="Project" />
//         </div>
      
      
//       </div>

//       <ProjectBar currentProject={currentProject} ref={projectBarRef} />
//     </div>
//   );
// }

// export default Boeing737Seat;






import AirplaneLayoutConcept from './Boeing737SeatImages/Airplane Layout Concept.png';
import BaseDevelopment from './Boeing737SeatImages/Base Development.png';
import ConceptDesign1 from './Boeing737SeatImages/Concept Design 1.png';
import ConceptDesign2 from './Boeing737SeatImages/Concept Design 2.png';
import ConceptDesign3 from './Boeing737SeatImages/Concept Design 3.png';
import ExplodedPartsView from './Boeing737SeatImages/Exploded Parts View.png';
import ExplodedView from './Boeing737SeatImages/ExplodedView.png';
import FinalDesignSketch from './Boeing737SeatImages/Final Design Sketch.png';
import FinalRender from './Boeing737SeatImages/Final Render.png';
import Key from './Boeing737SeatImages/Key.jpg';
import MechanismDesign from './Boeing737SeatImages/Mechanism Design.png';

import React, { useEffect, useRef, useState } from 'react';
import './ProjectInfoContainer.css'; // Import the shared CSS file
import BlackBackground from '../BlackBackground'; // Import the new BlackBackground component
import ProjectHeader from '../ProjectHeader';
import ProjectBar from '../ProjectBar';

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

function Boeing737Seat() {
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

  const currentProject = "Boeing737Seat"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
      <div className="image-wrapper">
          <img src={ExplodedView} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '50%', height: 'auto' }} />
          This was my first design project at university, and involved redesigning a long-haul economy seat for a Boeing 777-300. I was encouraged to redesign the cabin layout to maximise profits whilst considering passenger comfort.
          <p>The aim of creating this seat was to reduce manufacture, assembly, and material costs as well as reduce the plane fuel costs by reducing the seat weight where possible. The seat did still fulfil all standard safety requirements.</p>
        </div>
        <p>This was my first time designing a new product. I started designing iteratively, documenting all my progress in a project notebook. You can see some of the initial sketches designing the Headrest, Armrest, and Under-seat Barrier:</p>
        <div className="image-container">
          <img src={ConceptDesign3} alt="Concept Design 3" />
          <img src={ConceptDesign1} alt="Concept Design 1" />
          <img src={ConceptDesign2} alt="Concept Design 2" />
        </div>
        <p>The seat also needed a compact and adjustable reclining mechanism. I designed a few such mechanisms which can be seen below. Using a Pugh selection Matrix, I converged on a final seat concept.</p>
        <img src={MechanismDesign} alt="Mechanism Design" class="centered-image" style={{ width: '90%', height: 'auto' }} />
        <div className="image-wrapper">
          <img src={FinalDesignSketch} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '25%', height: 'auto' }} />
          The final design concept can be seen here to the left. It not only adheres to the brief, but also maximises passenger comfort.
        </div>
        <p>After making some preliminary CAD parts, I hand calculated the forces through the chair legs during a crash. Considering a 99th%-ile human weight, I redesigned the legs to survive a crash with minimal deflection, and improved them further using generative design techniques.</p>
        <img src={BaseDevelopment} alt="Base Development" style={{ width: '90%', height: 'auto' }} />
        <div className="image-container">
          <img src={FinalRender} alt="Final Render" />
          <img src={ExplodedPartsView} alt="Exploded Parts View" />
        </div>
        <ul>
          <li>The design is ergonomic, more compact, uses significantly fewer mechanical parts, and is still capable of being attached to standardised airplane seat tracks.</li>
          <li>The design is modular.</li>
          <li>Assembly is made exceptionally easy by removing the need for securing individual components. They can simply be slid onto two rails and secured laterally at the ends.</li> 
          <li>Created MATLAB code to calculate the optimal ratio of seats to facilities (to fulfil standard health and safety requirements).</li>
          <li>The code maximises the number of seats in the cabin layout (shown below), whilst still ensuring that each passenger has easy access to all facilities.</li>
        </ul>
        <div className="image-container">
          <img src={Key} alt="Key" />
          <img src={AirplaneLayoutConcept} alt="Airplane Layout Concept" />
        </div>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default Boeing737Seat;
