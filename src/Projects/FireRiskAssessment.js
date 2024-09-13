import Axle from './FireRiskAssessmentImages/Axle.jpg';
import EndEffector1 from './FireRiskAssessmentImages/End Effector 1.png';
import EndEffector2 from './FireRiskAssessmentImages/End Effector 2.png';
import EndEffector3 from './FireRiskAssessmentImages/End Effector 3.png';
import ProjectImage from './FireRiskAssessmentImages/ProjectImage.png';
import Robot1 from './FireRiskAssessmentImages/Robot 1.png';
import Robot2 from './FireRiskAssessmentImages/Robot 2.png';
import Robot3 from './FireRiskAssessmentImages/Robot 3.png';
import Robot4 from './FireRiskAssessmentImages/Robot 4.png';
import Robot5 from './FireRiskAssessmentImages/Robot 5.png';
import Robot7 from './FireRiskAssessmentImages/Robot 7.png';
import Robot8 from './FireRiskAssessmentImages/Robot 8.png';
import Wheel1 from './FireRiskAssessmentImages/Wheel 1.png';
import Wheel2 from './FireRiskAssessmentImages/Wheel 2.jpg';

// FireRiskAssessment.js
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

function FireRiskAssessment() {
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

  const currentProject = "FireRiskAssessment"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
        <div className="image-wrapper">
          <img src={Robot1} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '25%', height: 'auto' }} />
          I thoroughly enjoyed working as part of a team of four to design a portable robot, deployable from a rucksack, capable of climbing and descending staircases and opening doors. The robots payload also contained a suite of IR / regular cameras, sensors, and wireless transceivers for real-time communication.
        </div>
        <div className="image-container">
          <img src={Robot7} alt="Concept Design 3" />
          <img src={Robot8} alt="Concept Design 1" />
          <img src={Robot3} alt="Concept Design 2" />
        </div>
        <img src={ProjectImage} alt="Mechanism Design" class="centered-image" style={{ width: '90%', height: 'auto' }} />
        <ul>
          <li>Took charge of the mechanical design of the robot, concentrating specifically on the wheels, and door opening mechanism.</li>
          <li>Working in a team meant that we were able to generate a plethora of ideas and allowed me to get critical feedback on my designs. </li>
          <li>Working within the extreme constraints of the robots operating environment meant that we had to consider workarounds to maximise cooling potential whilst minimising the number of components that are greatly affected by heat exposure.</li> 
        </ul>
        <div className="image-container">
          <img src={Wheel1} alt="Concept Design 3" />
          <img src={Wheel2} alt="Concept Design 1" />
        </div>
        <img src={Axle} alt="Mechanism Design" class="centered-image" style={{ width: '70%', height: 'auto' }} />
        <ul>
          <li>I designed, prototyped and tested a collapsible tri-wheel design (top two images), which  provides an exceptionally fast stair climbing speed and linear path for the centre of mass of the robot (left). </li>
          <li>The Wheel uses few parts, is easy to maintain and has been designed for CNC manufacture. </li>
          <li>The Wheel has no electronic components as it is expanded using heat resistant cables, actuated from the cooled main body of the robot.</li> 
          <li>To accompany the innovative method of operation I created a custom axle (seen above) to enable the tensioning of the cables without entanglement.</li>
          <li>I designed a cable actuated end effector which uses recognition technology to position itself on the pivot of the door handle.</li>
          <li>It opens both left and right handed lever door handles rapidly and effectively. It reduces the stress on the robot by dissipating all the torque through the door handle pivot itself.</li>
          <li>I enjoyed working in a team as I truly believe that working with others creates support to produce innovate solutions and perfect ideas.</li>
        </ul>
        <div className="image-container">
          <img src={EndEffector1} alt="Concept Design 3" />
          <img src={EndEffector2} alt="Concept Design 1" />
          <img src={EndEffector3} alt="Concept Design 1" />
        </div>
        <div className="image-container">
          <img src={Robot2} alt="Concept Design 3" />
          <img src={Robot3} alt="Concept Design 1" />
        </div>
      </div>

      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default FireRiskAssessment;