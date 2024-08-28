import React, { useState, useEffect} from 'react';
import './HomePage.css';
import Background from './Background';
import DropdownWidget from './DropdownWidget';
import VisitorCounter from './VisitorCounter';
import StarfieldAnimation from 'react-starfield-animation'; // Assuming you've installed this library
import { useLocation } from 'react-router-dom';

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
                <div className="rectangle"></div>
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
                      <a href={`${process.env.PUBLIC_URL}/Zack El-baz CV 2024.pdf`} download="Zack_El-baz_CV_2024.pdf">
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