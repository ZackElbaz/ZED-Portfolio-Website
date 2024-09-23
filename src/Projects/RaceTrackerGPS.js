import CAD from './RaceTrackerGPSImages/CAD.png';
import Case from './RaceTrackerGPSImages/Case.png';
import emptytrays from './RaceTrackerGPSImages/emptytrays.png';
import filledtrays from './RaceTrackerGPSImages/filledtrays.png';
import RaceTrackerLogo from './RaceTrackerGPSImages/RaceTrackerLogo.png';
import ThreeDPrint1 from './RaceTrackerGPSImages/ThreeDPrint1.png';
import ThreeDPrint2 from './RaceTrackerGPSImages/ThreeDPrint2.png';
import ThreeDPrint3 from './RaceTrackerGPSImages/ThreeDPrint3.png';

// RaceTrackerGPS.js
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

function RaceTrackerGPS() {
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

  const currentProject = "RaceTrackerGPS"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
        <div className="image-wrapper">
          <img src={RaceTrackerLogo} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '25%', height: 'auto' }} />
          During my year in industry, working at Lightbug, I was placed on a project to redesign the charging stations used by RaceTracker. I designed injection moulded modular charging docks and respective injection moulded components to cater for large fleets of trackers. These form removeable portable charging trays that fit inside standardised waterproof Nanuk 918 and 950 cases.
        </div>
        <p>The aim of this project was to reduce manufacturing costs and assembly time. Following regular communications with Shenzhen Kaierwo Plastics, I now have a firm grasp of the more nuanced aspects of designing for injection moulding, and understand the limitations imposed by this manufacturing process, and have now designed mass manufacturable compliant plastic components. My designs ensured all the components in these assemblies require no sliders during the injection moulding process, and the assembly for both docks require no external components such as glue.</p>
        <div className="image-container">
          <img src={ThreeDPrint1} alt="Concept Design 3" />
          <img src={ThreeDPrint2} alt="Concept Design 1" />
          <img src={ThreeDPrint3} alt="Concept Design 2" />
        </div>
        <div className="image-wrapper">
          <img src={emptytrays} alt="Final Design Sketch" style={{ float: 'right', marginLeft: '15px', maxWidth: '50%', height: 'auto' }} />
          <img src={CAD} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '35%', height: 'auto' }} />
          With my design, I managed to reduce assembly time of the Racetracker trays by a factor of 3 as well as reduce the material cost by a factor of 2. There have been no faulty injection moulded parts, all the components fit correctly, no issues during assembly and none of the charging pins failed to contact either the board or the Racetracker AS devices.
        </div>
        <p><img src={filledtrays} alt="Mechanism Design" class="centered-image" style={{ width: '90%', height: 'auto' }} /></p>
        <div className="image-wrapper">
          <img src={Case} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '35%', height: 'auto' }} />
          Racetracker AS were provided with an early prototype to use for a few months, their satisfaction with the Racetracker design and tray improvements resulted in an additional 500 tracker orders, a 75% increase to their original order.
        </div>
        <p></p>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default RaceTrackerGPS;