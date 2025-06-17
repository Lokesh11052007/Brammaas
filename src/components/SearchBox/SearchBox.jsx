import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchButton.css';

function SearchButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="d-flex align-items-center justify-content-end search-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      
      <button className="search-btn">
        <FaSearch />
      </button>
      <input
        type="text"
        className={`form-control search-input ${hovered ? 'visible' : ''}`}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchButton;
