import React, { useState } from 'react';
import '../UI_Elemets/dropdown.css'; // Import your CSS file for styling

const Dropdown = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                {label}
            </button>
            <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
