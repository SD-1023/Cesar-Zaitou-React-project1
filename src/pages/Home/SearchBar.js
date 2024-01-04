// SearchBar.js
import React, { useState } from "react";
import { IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';

const SearchBar = ({ searchVal,onSearch ,sortVal, onSort, filterVal, onFilter,filterOptions}) => {
  
 

  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
      console.log("Debounce called");
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const debouncedOnSearch = debounce(onSearch, 200);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedOnSearch(term);
   
    
  };
   


  return (
<div className="search-container border">
  <div className="search-bar">
    <div className="search-icon">
      <IonIcon icon={search}></IonIcon>
      <input
            type="text"
            className="search-input"
            placeholder="Search the website..."
            value={searchVal}
            onChange={handleSearchChange} // Add onChange event handler
          />
      
    </div>
  </div>
  <div className="dropdown-container">
    <div className="dropdown">
      <label htmlFor="sort-dropdown">Sort by:</label>
      <select id="sort-dropdown" value={sortVal} onChange={(event)=>onSort(event.target.value)}>
        <option value='all'>Default</option>
        <option value="author">Author Name</option>
        <option value="topic">Topic Title</option>
       
        {/* Add more options as needed */}
      </select>
    </div>

    <div className="dropdown filter">
      <label htmlFor="category-filter">Filter by:</label>
      <select id="category-filter" value={filterVal} onChange={(event)=>onFilter(event.target.value)}>
        <option>Default</option>
        {
        filterOptions?.map((option) => <option key={option}>{option}</option>)
        }
      </select>
    </div>
  </div>
</div>
  );
};

export default SearchBar;
// const [searchTerm, setSearchTerm] = useState('');

  // const debounce = (cb, delay) => {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       cb(...args);
  //     }, delay);
  //   };
  // };

  // const handleSearch = debounce((term) => {
  //   onSearch(term);
  // }, 300);

  // const handleChange = (e) => {
  //   const term = e.target.value;
  //   setSearchTerm(term);
  //   handleSearch(term);
  // };

  