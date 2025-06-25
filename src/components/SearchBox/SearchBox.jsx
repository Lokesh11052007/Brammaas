import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchButton.css';

function SearchButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="d-flex align-items-center justify-content-end search-wrapper me-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        type="text"
        className={`form-control search-input ${hovered ? 'visible' : ''}`}
        placeholder="Search..."
      />
      <button className="search-btn">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchButton;
