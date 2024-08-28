import React, { useState, useEffect, useRef } from 'react';
import './DropdownWidget.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const colors = [
    { id: 0, name: 'Real Time Kinematic Device', url: '/Projects/LightbugRTK' },
    { id: 1, name: 'Dissertation', url: '/Projects/Dissertation' },
    { id: 2, name: 'brown' },
    { id: 3, name: 'cyan' },
    { id: 4, name: 'gold' },
    { id: 5, name: 'gray' },
    { id: 6, name: 'green' },
    { id: 7, name: 'magenta' },
    { id: 8, name: 'maroon' },
    { id: 9, name: 'navy' },
    { id: 10, name: 'orange' },
    { id: 11, name: 'pink' },
    { id: 12, name: 'purple' },
    { id: 13, name: 'red' },
    { id: 14, name: 'silver' },
    { id: 15, name: 'teal' },
    { id: 16, name: 'turquoise' },
    { id: 17, name: 'violet' },
    { id: 18, name: 'white' },
    { id: 19, name: 'yellow' },
];

const DropdownWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredColors, setFilteredColors] = useState(colors);
    const [selectedIdx, setSelectedIdx] = useState(-1); // Index of the currently selected color
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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setSearchInput('');
        setFilteredColors(colors); // Reset filtered colors when opening the dropdown
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
            setFilteredColors(colors);
        } else {
            const filtered = colors.filter(color => color.name.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredColors(filtered);
            setIsOpen(true);
        }
        setSelectedIdx(-1); // Reset selected index when changing input
    };

    const handleSelect = (value) => {
        setSearchInput(value.name);
        setIsOpen(false);
        setFilteredColors(colors);
        setSelectedIdx(-1); // Reset selected index after selection
        navigate(value.url); // Use navigate to change route
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (selectedIdx !== -1) {
                handleSelect(filteredColors[selectedIdx]);
            } else if (filteredColors.length > 0) {
                handleSelect(filteredColors[0]); // Select the top option if Enter is pressed and no option is selected
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault(); // Prevent scrolling the page
            setSelectedIdx(prevIdx => (prevIdx > 0 ? prevIdx - 1 : prevIdx));
        } else if (event.key === 'ArrowDown') {
            event.preventDefault(); // Prevent scrolling the page
            setSelectedIdx(prevIdx => (prevIdx < filteredColors.length - 1 ? prevIdx + 1 : prevIdx));
        } else if (event.key === 'Tab') {
            event.preventDefault(); // Prevent default tab behavior
            if (filteredColors.length > 0) {
                setSearchInput(filteredColors[0].name);
            }
        }
    };

    const handleOptionClick = (idx) => {
        setSelectedIdx(idx);
        handleSelect(filteredColors[idx]);
    };

    return (
        <div className="WIDGET_COMPONENTS dropdown-widget-container">
            <div className="dropdown-input-container" ref={dropdownRef}>
                <input
                    type="text"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    onClick={toggleDropdown}
                    placeholder="Search..."
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
                        fill="currentColor"
                        className="bi bi-caret-down"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.603 7H11.4L8 10.5 4.603 7zm.532-1.499a1 1 0 0 0-1.437 0L.469 9.468A1 1 0 0 0 1.205 11h13.59a1 1 0 0 0 .736-1.532L5.135 5.501zM8 11.5L12.865 6H3.135L8 11.5z" />
                    </svg>
                </div>
                {isOpen && (
                    <div className='dropdown-list open'>
                        <ul>
                            {filteredColors.map((color, idx) => (
                                <li
                                    key={color.id}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: idx === selectedIdx || (selectedIdx === -1 && idx === 0) ? '#ccc' : 'transparent', // Highlight the selected color or the top option
                                    }}
                                    onClick={() => handleOptionClick(idx)}
                                >
                                    {color.name}
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