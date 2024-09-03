// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './ProjectHeader.css';
// import DropdownWidget from './DropdownWidget';
// import { projects } from './projectsData'; // Import the project data

// function ProjectHeader({ currentProject }) {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   const [selectedTags, setSelectedTags] = useState([]);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const project = projects.find(proj => proj.name === currentProject);

//   useEffect(() => {
//     if (project) {
//       const shuffledTags = project.tags.sort(() => 0.5 - Math.random());
//       const selected = shuffledTags.slice(0, 3);
//       selected.sort();
//       setSelectedTags(selected);
//     }
//   }, [project]);

//   const topAspectRatio = 4 / 3;
//   const topInitialHeight = 100;
//   const bufferHeight = 20;
//   const topHeight = Math.min(topInitialHeight, windowSize.height - bufferHeight);

//   const leftWidthPercent = 20;
//   const rightWidthPercent = 15;
//   const middleWidthPercent = 100 - leftWidthPercent - rightWidthPercent;

//   const middleWidth = (middleWidthPercent / 100) * windowSize.width * 0.6 - 50;

//   document.documentElement.style.setProperty('--search-bar-width', `${middleWidth}px`);

//   return (
//     <div className="project-header">
//       <div className="top" style={{ height: `${topHeight}px`, width: `${windowSize.width}px`, margin: `${bufferHeight}px auto 0 auto`, position: 'relative' }}>
//         <div className="left-quarter" style={{ height: '100%', width: `${leftWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Link to="../ForceRefresh">
//           <button>Go to Home Page</button>
//         </Link>
//         </div>
//         <div className="middle-half" style={{ height: `${topHeight}px`, width: `${middleWidthPercent}%`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//           <div className="dropdown-widget-container" style={{ width: `${middleWidthPercent}%` }}>
//             <DropdownWidget />
//           </div>
//         </div>
//         <div className="right-quarter" style={{ height: '100%', width: `${rightWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <img
//             src={`${process.env.PUBLIC_URL}/LogoSVG.svg`}
//             alt="Logo"
//             className="logo"
//             style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }}
//           />
//         </div>
//       </div>

//       <div className="project-info-container">
//         <div className="tag-list">
//           {selectedTags.map((tag, index) => (
//             <span key={index} className="tag">{tag}</span>
//           ))}
//         </div>
//         <div className="project-name-container">
//           <h1 className="project-name">{project?.displayName}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectHeader;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectHeader.css';
import DropdownWidget from './DropdownWidget';
import { projects } from './projectsData';
import { ReactComponent as HomeIcon } from './Assets/HomeSVG.svg'; // Import the SVG

function ProjectHeader({ currentProject }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const project = projects.find(proj => proj.name === currentProject);

  useEffect(() => {
    if (project) {
      const shuffledTags = project.tags.sort(() => 0.5 - Math.random());
      const selected = shuffledTags.slice(0, 3);
      selected.sort();
      setSelectedTags(selected);
    }
  }, [project]);

  const topAspectRatio = 4 / 3;
  const topInitialHeight = 100;
  const bufferHeight = 20;
  const topHeight = Math.min(topInitialHeight, windowSize.height - bufferHeight);

  const leftWidthPercent = 20;
  const rightWidthPercent = 15;
  const middleWidthPercent = 100 - leftWidthPercent - rightWidthPercent;

  const middleWidth = (middleWidthPercent / 100) * windowSize.width * 0.6 - 50;

  document.documentElement.style.setProperty('--search-bar-width', `${middleWidth}px`);

  return (
    <div className="project-header">
      <div className="top" style={{ height: `${topHeight}px`, width: `${windowSize.width}px`, margin: `${bufferHeight}px auto 0 auto`, position: 'relative' }}>
        <div className="left-quarter" style={{ height: '100%', width: `${leftWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="../ForceRefresh">
            <HomeIcon className="home-icon" /> {/* Use the SVG here */}
          </Link>
        </div>
        <div className="middle-half" style={{ height: `${topHeight}px`, width: `${middleWidthPercent}%`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="dropdown-widget-container" style={{ width: `${middleWidthPercent}%` }}>
            <DropdownWidget />
          </div>
        </div>
        <div className="right-quarter" style={{ height: '100%', width: `${rightWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/LogoSVG.svg`}
            alt="Logo"
            className="logo"
            style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="project-info-container">
        <div className="tag-list">
          {selectedTags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-name-container">
          <h1 className="project-name">{project?.displayName}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;

