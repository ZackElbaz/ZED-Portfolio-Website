// TKRTestDevice.js
import AngledCloseUp from './TKRTestDeviceImages/AngledCloseUp.png';
import CloseUp from './TKRTestDeviceImages/CloseUp.png';
import CruxLogo from './TKRTestDeviceImages/CruxLogo.png';
import KneeAngles from './TKRTestDeviceImages/KneeAngles.png';
import KukaArm from './TKRTestDeviceImages/KukaArm.png';
import OpenPose from './TKRTestDeviceImages/OpenPose.png';
import PrintedCloseUp from './TKRTestDeviceImages/PrintedCloseUp.png';

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

function TKRTestDevice() {
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

  const currentProject = "TKRTestDevice"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
        <div className="image-wrapper">
          <img src={CruxLogo} alt="Final Design Sketch" style={{ float: 'right', marginLeft: '15px', maxWidth: '40%', height: 'auto' }} />
          My dissertation was conducted collaboratively with CRUX product design and three other Engineering Design students from the University of Bristol. It explores non-invasive methods for capturing human knee motion and designing a biologically representative test rig fixture for testing knee implants.
        </div>
        <div className="image-wrapper">
          <img src={CloseUp} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '40%', height: 'auto' }} />
          My role within the group involved developing an end effector for testing knee implants which is capable of simulating human knee motion in 6-DoF.
          <p>The final design is actuated by a 6 DoF Kuka robotic arm, has modular implant surfaces to test the interaction of any desired surface geometry, adaptable ligament positioning and tensioning for patient specific parameters. Sensors are integrated throughout the design to ensure biological similarity of ligament interactions. The base of the test rig is mobile and can be constrained to exhibit all possible gait cycles.</p>
        </div>
        <div className="image-wrapper">
          <img src={KukaArm} alt="Final Design Sketch" style={{ float: 'right', marginLeft: '15px', maxWidth: '40%', height: 'auto' }} />
          Our suggested solution provides more accessible, repeatable and reproducible testing on a modular and adaptable platform. 
          <p>This product will be situated in an academic institution and will be available to all, using a booking system. As a result, the barrier to entry for knee implant research is significantly lowered, leading to better and more innovative research and faster development within the field.</p>
          <p>Employing this system in this manner aims to reduce the need for revision surgery, improving patients’ post-operative pain and the burden on the NHS.</p>
        </div>
        <p>My role in the project also involved exploring non-invasive techniques for accurately determining bone locations. In my first year, I evaluated different techniques for empirically determining knee locations using motion capture tags, which proved unfruitful. In my second year, I assessed the accuracy of existing AIs for determining knee flexion angles, an excerpt of the results can be seen below. Future development would involve collecting more instrumented implant flexion-angle data and creating a bespoke AI for this specific use case.</p>
        <div className="image-container">
          <img src={OpenPose} alt="Final Render" />
          <img src={KneeAngles} alt="Exploded Parts View" />
        </div>
        <p>To verify and validate the CAD design, and AI calculated angles, physical prototyping was employed. Using my personal printers, I FDM printed the block components to maintain strength, and resin printed the implant geometries to ensure sufficient levels of accuracy between the contact surfaces. The printed parts were assembled using standard components and tested using a 1 degree of freedom robotic actuator.</p>
        <div className="image-container">
          <img src={AngledCloseUp} alt="Final Render" />
          <img src={PrintedCloseUp} alt="Exploded Parts View" />
        </div>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default TKRTestDevice;