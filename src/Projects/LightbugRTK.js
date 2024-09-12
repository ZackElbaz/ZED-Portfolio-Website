// LightbugRTK.js
import AlstomHitachi from './LightbugRTKImages/AlstomHitachi.png';
import AssemblyProcess from './LightbugRTKImages/AssemblyProcess.png';
import ChargingStation from './LightbugRTKImages/ChargingStation.png';
import FinalProduct from './LightbugRTKImages/FinalProduct.png';
import LendleaseLogo from './LightbugRTKImages/LendleaseLogo.png';
import LightbugLogo from './LightbugRTKImages/LightbugLogo.png';
import networkRailLogo from './LightbugRTKImages/networkRailLogo.png';
import OnwaveLogo from './LightbugRTKImages/OnwaveLogo.png';
import PlasticFlow1 from './LightbugRTKImages/PlasticFlow1.png';
import PlasticFlow2 from './LightbugRTKImages/PlasticFlow2.png';
import PUBLogo from './LightbugRTKImages/PUBLogo.png';
import Transparent from './LightbugRTKImages/Transparent.png';

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

function LightbugRTK() {
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

  const currentProject = "LightbugRTK"; // Or dynamically set this

  return (
    <div className="page-container">
      <BlackBackground /> {/* Use BlackBackground component here */}
      <ProjectHeader currentProject={currentProject} />
      
      {/* Project Content */}
      <div className="project-info-box" style={{ bottom: `${projectBarRef.current?.offsetHeight}px` }}>
        <div className="image-wrapper">
            <img src={OnwaveLogo} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '0px', maxWidth: '50%', height: 'auto' }} />
            <img src={LightbugLogo} alt="Final Design Sketch" style={{ float: 'right', marginLeft: '0px', maxWidth: '20%', height: 'auto' }} />
            In my year in industry at Lightbug, I worked with Onwave to create a durable, wearable Real-Time Kinematic (RTK) device that aims to prevent any injuries, casualties or near misses occurring to workers within the infrastructure industry, and improving fleet management, subsequently saving time and lives.
        </div>
        <p>For this project I designed the internal electronic layout and injection moulded casing. The device has a 12-hour battery life and operational temperature range of -10°C to 30°C, with IP67 waterproof rating, and be capable of 100mm accuracy tracking, haptics, OLED, and audio feedback for user friendly performance.</p>
        <div className="image-container">
          <img src={Transparent} alt="Final Render" />
          <img src={FinalProduct} alt="Exploded Parts View" />
          <img src={ChargingStation} alt="Exploded Parts View" />
        </div>
        <p>Throughout this project I learnt to deal with client indecisiveness, I adapted to quickly create robust parametric models. By consistently delivering high quality work for Onwave, and constantly pushing the project forward, I have cemented Onwave’s trust in Lightbug’s abilities and quality products and they are currently Lightbug’s biggest client.</p>
        <p>I was directly involved with experts in Shenzhen Kaier Wo, and learnt how do modify CAD models to ensure consistency with desired manufacturing outcomes. Below are some of the injection moulding flow models of the RTK Device casing</p>
        <div className="image-container">
          <img src={PlasticFlow1} alt="Final Render" />
          <img src={PlasticFlow2} alt="Exploded Parts View" />
        </div>
        <div className="image-wrapper">
            <img src={AssemblyProcess} alt="Final Design Sketch" style={{ float: 'left', marginLeft: '15px', maxWidth: '60%', height: 'auto' }} />
            I surveyed all steps in the design process of this device including assembly. I had taken the assembly process into serious consideration when designing the casing as throughout my year in industry, I had spent hours soldering devices and wasting time with inefficient manufacturing processes. I had aimed to simplify and streamline the assembly process by reducing complicated wire routing, and creating holding tabs to separate the electronic componets, holding them in their correct places.
        </div>
        <p>Onwave have been presenting the RTK device at expos such as Futureworx 2022, Hexagon Geosystems Event 2022 and Data Centre World 2021. The device has already gained interest from international infrastructure companies (such as Network Rail, Landlease Australia, Singapore Water Authority, Alstom Hitachi), giving scope for international expansion.</p>
        <div className="image-container">
          <img src={networkRailLogo} alt="Final Render" />
          <img src={LendleaseLogo} alt="Exploded Parts View" />
          <img src={AlstomHitachi} alt="Exploded Parts View" />
          <img src={PUBLogo} alt="Exploded Parts View" />
        </div>
      </div>
      <ProjectBar currentProject={currentProject} ref={projectBarRef} />
    </div>
  );
}

export default LightbugRTK;