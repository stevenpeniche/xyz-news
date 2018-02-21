import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="source-page-search-bar">
      <span className="source-page-search-bar-icon">
        <i className="fas fa-search"></i>
      </span>
      <input className="source-page-search-input" type="text" placeholder="Search..."/>
    </div>
  );
};

export default SearchBar;