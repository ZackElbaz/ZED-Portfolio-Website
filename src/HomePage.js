//HomePage.js
import React, { useState, useEffect} from 'react';
import './HomePage.css';
import Background from './Background';
import DropdownWidget from './DropdownWidget';
import VisitorCounter from './VisitorCounter';
import StarfieldAnimation from 'react-starfield-animation'; // Assuming you've installed this library
import { useLocation, useNavigate } from 'react-router-dom';
import { projectsInfo } from './projectsData';

// KEEP THESE HERE AS THEY WILL BE USEFUL TO ME IN THE FUTURE
//import { Link } from 'react-router-dom';

function HomePage() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  

    // KEEP THESE HERE AS THEY WILL BE USEFUL TO ME IN THE FUTURE
    const [leftWidthPercent, setLeftWidthPercent] = useState(20);
    const [rightWidthPercent, setRightWidthPercent] = useState(15);
    const [bottomSectionHeightPercent, setBottomSectionHeightPercent] = useState(15);
    const [contactMeRowHeightPercent, setContactMeRowHeightPercent] = useState(30);
    
    const navigate = useNavigate();
    const location = useLocation();

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

    // Sort projects by most recent date and grab the top 3
    const sortedProjects = projectsInfo
        .sort((a, b) => b.date - a.date) // Sort by date (newest first)
        .slice(0, 3); // Get the three most recent projects

    // Handle navigation when a section is clicked
    const handleProjectClick = (projectName) => {
        navigate(`/Projects/${projectName}`);
    };

    const topAspectRatio = 4 / 3;
    const topInitialHeight = 100;
    const bufferHeight = 20;
    const topHeight = Math.min(topInitialHeight, windowSize.height - bufferHeight);
    // KEEP THESE HERE AS THEY WILL BE USEFUL TO ME IN THE FUTURE
    // const topWidth = Math.min(topHeight * topAspectRatio, windowSize.width);
  
    const bottomHeightPercent = (bottomSectionHeightPercent / 100) * windowSize.height;
    const middleHeight = windowSize.height - topHeight - bottomHeightPercent - bufferHeight;
    const middleWidthPercent = 100 - leftWidthPercent - rightWidthPercent;
    const contactMeHeight = (contactMeRowHeightPercent / 100) * bottomHeightPercent;
  
    const searchBarHeight = `${(topHeight * 0.6) - 30}px`;
    // KEEP THESE HERE AS THEY WILL BE USEFUL TO ME IN THE FUTURE
    // const searchBarCornerRadius = searchBarHeight;
    // const searchBarFontSize = searchBarHeight * 0.7;
    const contactMeFontSize = contactMeHeight * 0.5;
    const linkSpacing = windowSize.height * 0.03;
    const linkFontSize = (bottomHeightPercent - contactMeHeight) * 0.2;
  
    // KEEP THESE HERE AS THEY WILL BE USEFUL TO ME IN THE FUTURE
    // const widgetAspectRatio = 1;
    // const widgetWidth = Math.min(windowSize.width * 0.8, windowSize.height * widgetAspectRatio);
    // const widgetHeight = widgetWidth / widgetAspectRatio;
  
    document.documentElement.style.setProperty('--search-bar-height', searchBarHeight);
    const middleWidth = (middleWidthPercent / 100) * windowSize.width * 0.6 - 50;
    document.documentElement.style.setProperty('--search-bar-width', `${middleWidth}px`);
  
    return (
        <div className="app">
          <Background />
          <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }}>
                <StarfieldAnimation
                key={location.pathname}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                />
            </div>
          <div className="content">
            <div className="top" style={{ height: `${topHeight}px`, width: `${windowSize.width}px`, margin: `${bufferHeight}px auto 0 auto`, position: 'relative' }}>
              <div className="left-quarter" style={{ height: '100%', width: `${leftWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/LogoSVG.svg`}
                  alt="Logo"
                  className="logo"
                  style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="middle-half" style={{ height: `${topHeight}px`, width: `${middleWidthPercent}%`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="dropdown-widget-container" style={{ width: `${middleWidthPercent}%` }}>
                  <DropdownWidget />
                </div>
              </div>
              <div className="right-quarter" style={{ height: '100%', width: `${rightWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <VisitorCounter />
              </div>
            </div>
            <div className="middle" style={{ height: `${middleHeight}px`, width: windowSize.width }}>
              <div className="buffer"></div>
              <div className="rectangle-buffer">
                <div className="rectangle">
                  {/* New "Recent Projects" label */}
                  <div className="recent-projects-label">
                    Recent Projects:
                  </div>
                  {/* Three sections inside the rectangle */}
                  <div 
                    className="section section-1" 
                    onClick={() => handleProjectClick(sortedProjects[0].name)}
                    style={{
                      backgroundImage: `url(${sortedProjects[0].imagePath})`, // Set project image
                      backgroundSize: 'cover', // Make sure image covers the section
                      backgroundPosition: 'center', // Center the image
                      position: 'relative', // Allow positioning of text
                    }}
                  >
                    {/* Project Title (In front of the image) */}
                    <div className="project-title-overlay">{sortedProjects[0].displayName}</div>
                  </div>

                  <div 
                    className="section section-2" 
                    onClick={() => handleProjectClick(sortedProjects[1].name)}
                    style={{
                      backgroundImage: `url(${sortedProjects[1].imagePath})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <div className="project-title-overlay">{sortedProjects[1].displayName}</div>
                  </div>

                  <div 
                    className="section section-3" 
                    onClick={() => handleProjectClick(sortedProjects[2].name)}
                    style={{
                      backgroundImage: `url(${sortedProjects[2].imagePath})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <div className="project-title-overlay">{sortedProjects[2].displayName}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom" style={{ height: `${bottomHeightPercent}px`, width: windowSize.width }}>
              <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div className="contact-me-row" style={{ marginBottom: `${contactMeHeight * 0.1}px`, fontWeight: 'bold', fontSize: `${contactMeFontSize}px` }}>
                  Contact Me:
                </div>
                <div className="link-container" style={{ display: 'flex', gap: `${linkSpacing}px`, fontSize: `${linkFontSize}px`, textAlign: 'center' }}>
                  <div className="icon-container">
                    <div>
                      <a href="https://www.linkedin.com/in/zack-el-baz" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/LinkedinSVG.svg`} alt="LinkedIn" className="icon" />
                      </a>
                    </div>
                    <div className="text">LinkedIn</div>
                  </div>
                  <div className="icon-container">
                    <div>
                      <a href="mailto:zackelbaz@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/EmailSVG.svg`} alt="Email" className="icon" />
                      </a>
                    </div>
                    <div className="text">Email</div>
                  </div>
                  <div className="icon-container">
                    <div>
                      <a href="https://www.google.com/maps?q=London,%20UK" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/LocationSVG.svg`} alt="Location" className="icon" />
                      </a>
                    </div>
                    <div className="text">Location</div>
                  </div>
                  <div className="icon-container">
                    <div>
                    <a 
                      href={`${process.env.PUBLIC_URL}/Zack El-baz CV 2024 V2.pdf`} 
                      download="Zack_El-baz_CV_2024.pdf"
                    >
                        <img src={`${process.env.PUBLIC_URL}/PDFSVG.svg`} alt="CV" className="icon" />
                      </a>
                    </div>
                    <div className="text">CV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

export default HomePage;