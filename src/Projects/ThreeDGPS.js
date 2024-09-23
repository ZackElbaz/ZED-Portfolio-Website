import DataTester from './ThreeDGPSImages/DataTester.png';
import Equation from './ThreeDGPSImages/Equation.png';
import LightbugLogo from './ThreeDGPSImages/LightbugLogo.png';
import Terrain from './ThreeDGPSImages/Terrain.png';
import Triangulation from './ThreeDGPSImages/Triangulation.png';
import Whiteboard1 from './ThreeDGPSImages/Whiteboard1.png';
import Whiteboard2 from './ThreeDGPSImages/Whiteboard2.png';

// ThreeDGPS.js
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

function ThreeDGPS() {
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

  const currentProject = "ThreeDGPS"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
        <div className="image-wrapper">
          <img src={LightbugLogo} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '25%', height: 'auto' }} />
          This was a research and development project that I carried out in the second half of my year in industry. It involved research for gathering altitude variance data using live pressure and humidity readings, leading to the development of prototypes for the first commercially viable GPS tracker that accurately identifies location in all three dimensions.
        </div>
        <div className="image-container">
          <img src={Triangulation} alt="Concept Design 3" />
          <img src={Terrain} alt="Concept Design 1" />
        </div>
        <p>This project taught me how to read data sheets and theoretical knowledge on how sensors measure environmental elements, as well as giving me the opportunity to manage a long-standing project, document progress in a coherent manner, and carry out efficient and comprehensive research.</p>
        <div className="image-container">
          <img src={Whiteboard2} alt="Concept Design 1" />
          <img src={Whiteboard1} alt="Concept Design 1" />
          <img src={DataTester} alt="Concept Design 3" />
        </div>
        <p>By the end of my placement I had created an equation that, using live barometric data from sensors, accurately located the device within 1m of accuracy. This feature can be used in the infrastructure industry to detect building site levels, the depth of holes that need to be dug and the proximity of tools to subterranean pipes. It could also be used underground, outside and in tall buildings such as hospitals to identify what floor a piece of equipment is located, or to create vertical tracking maps for climbing routes, hikes and runs.</p>
        <img src={Equation} alt="Mechanism Design" class="centered-image" style={{ width: '50%', height: 'auto' }} />
        <p></p>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default ThreeDGPS;