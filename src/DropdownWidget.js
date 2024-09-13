import React, { useState, useEffect, useRef } from 'react';
import './DropdownWidget.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProjectList = [
    { id: 0, name: 'Real Time Kinematic GPS Device', url: '/Projects/LightbugRTK' },
    { id: 1, name: 'Knee Implant Test Rig', url: '/Projects/TKRTestDevice' },
    { id: 2, name: 'Bicycle Ambulance', url: '/Projects/BicycleAmbulance' },
    { id: 3, name: 'Boeing 777-300 Seat', url: '/Projects/Boeing737Seat' },
    { id: 4, name: '3D GPS Tracker', url: '/Projects/ThreeDGPS' },
    { id: 5, name: 'RaceTracker GPS', url: '/Projects/RaceTrackerGPS' },
    { id: 6, name: 'Domestic Fire Risk Assessment Robot', url: '/Projects/FireRiskAssessment' },
    { id: 7, name: 'Physical GIF Generator', url: '/Projects/PhysicalGIF' },
    { id: 8, name: 'Reaction-Diffusion Art', url: '/Projects/ReactionDiffusion' },
    { id: 9, name: 'Mechanical Mirror', url: '/Projects/MechanicalMirror' },
    { id: 10, name: 'Coloured Halftones', url: '/Projects/ColouredHalftone' },
    { id: 11, name: 'Caustic Lens Generator', url: '/Projects/CausticLensGenerator' },
];

const DropdownWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProjectList, setFilteredProjectList] = useState(ProjectList);
    const [selectedIdx, setSelectedIdx] = useState(-1); // Index of the currently selected Project
    const [placeholder, setPlaceholder] = useState('Search for projects...'); // Placeholder state
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null); // Ref for the search input
    const arrowRef = useRef(null); // Ref for the dropdown arrow
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Scroll to selected option if it's not fully visible
        if (selectedIdx !== -1 && isOpen) {
            const list = dropdownRef.current.querySelector('ul');
            const selectedOption = list.childNodes[selectedIdx];
            if (selectedOption) {
                selectedOption.scrollIntoView({ block: 'center' }); // Scroll the selected option into view
            }
        }
    }, [selectedIdx, isOpen]);

    useEffect(() => {
        // Function to update placeholder text based on orientation
        const updatePlaceholder = () => {
            if (window.matchMedia('(orientation: landscape)').matches) {
                setPlaceholder('Search for projects...');
            } else {
                setPlaceholder('Search...');
            }
        };

        // Add event listener for orientation change
        window.addEventListener('resize', updatePlaceholder);

        // Initial check
        updatePlaceholder();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updatePlaceholder);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setSearchInput('');
        setFilteredProjectList([...ProjectList].sort((a, b) => a.name.localeCompare(b.name))); // Reset filtered Project and sort
        setSelectedIdx(-1); // Reset selected index when opening the dropdown
        if (!isOpen) {
            // Delay focusing on the search input to ensure arrow click event is handled
            setTimeout(() => {
                searchInputRef.current.focus();
            }, 0);
            setSelectedIdx(0); // Set focus on the first option
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);

        if (inputValue === '') {
            setFilteredProjectList([...ProjectList].sort((a, b) => a.name.localeCompare(b.name)));
        } else {
            const filtered = ProjectList.filter(project => project.name.toLowerCase().includes(inputValue.toLowerCase()))
                .sort((a, b) => a.name.localeCompare(b.name));
            setFilteredProjectList(filtered);
            setIsOpen(true);
        }
        setSelectedIdx(-1); // Reset selected index when changing input
    };

    const handleSelect = (value) => {
        setSearchInput(value.name);
        setIsOpen(false);
        setFilteredProjectList([...ProjectList].sort((a, b) => a.name.localeCompare(b.name))); // Reset filtered Project and sort
        setSelectedIdx(-1); // Reset selected index after selection
        navigate(value.url); // Use navigate to change route
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (selectedIdx !== -1) {
                handleSelect(filteredProjectList[selectedIdx]);
            } else if (filteredProjectList.length > 0) {
                handleSelect(filteredProjectList[0]); // Select the top option if Enter is pressed and no option is selected
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault(); // Prevent scrolling the page
            setSelectedIdx(prevIdx => (prevIdx > 0 ? prevIdx - 1 : prevIdx));
        } else if (event.key === 'ArrowDown') {
            event.preventDefault(); // Prevent scrolling the page
            setSelectedIdx(prevIdx => (prevIdx < filteredProjectList.length - 1 ? prevIdx + 1 : prevIdx));
        } else if (event.key === 'Tab') {
            event.preventDefault(); // Prevent default tab behavior
            if (filteredProjectList.length > 0) {
                setSearchInput(filteredProjectList[0].name);
            }
        }
    };

    const handleOptionClick = (idx) => {
        setSelectedIdx(idx);
        handleSelect(filteredProjectList[idx]);
    };

    return (
        <div className="WIDGET_COMPONENTS dropdown-widget-container">
            <div className="dropdown-input-container" ref={dropdownRef}>
                <input
                    type="text"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    onClick={toggleDropdown}
                    placeholder={placeholder} // Use dynamic placeholder
                    className="dropdown-input"
                    value={searchInput}
                    ref={searchInputRef} // Assign ref to the search input
                />
                <div
                    onMouseDown={toggleDropdown}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            toggleDropdown(); // Open the dropdown if Enter or Space is pressed on the arrow
                        }
                    }}
                    ref={arrowRef}
                    tabIndex="0" // Add tabIndex to make the arrow focusable
                    className="dropdown-arrow"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentProjectList"
                        className="bi bi-caret-down"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.603 7H11.4L8 10.5 4.603 7zm.532-1.499a1 1 0 0 0-1.437 0L.469 9.468A1 1 0 0 0 1.205 11h13.59a1 1 0 0 0 .736-1.532L5.135 5.501zM8 11.5L12.865 6H3.135L8 11.5z" />
                    </svg>
                </div>
                {isOpen && (
                    <div className='dropdown-list open'>
                        <ul>
                            {filteredProjectList.map((project, idx) => (
                                <li
                                    key={project.id}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: idx === selectedIdx || (selectedIdx === -1 && idx === 0) ? '#ccc' : 'transparent', // Highlight the selected Project or the top option
                                    }}
                                    onClick={() => handleOptionClick(idx)}
                                >
                                    {project.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownWidget;
