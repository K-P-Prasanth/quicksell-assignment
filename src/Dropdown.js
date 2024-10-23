import React from 'react';
import './Dropdown.css'; 

const Dropdown = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="dropdown">
            <select 
                value={selectedOption} 
                onChange={(e) => onSelect(e.target.value)}
                className="dropdown-select"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
