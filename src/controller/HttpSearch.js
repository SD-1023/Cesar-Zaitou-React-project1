// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleSearch = debounce((term) => {
    onSearch(term);
  }, 300);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search topics..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
