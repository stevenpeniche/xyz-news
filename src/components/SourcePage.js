import React from 'react';
import './SourcePage.css';

const SourcePage = (props) => {
  return (
    <div className="source-page">
      <div className="source-page-sidebar">
        <div className="source-icon-container">
          <img className="source-icon" src={props.source.faviconURL} alt={props.source.title} />
        </div>
      </div>
      <div className="source-page-main">
        <div className="source-page-search-bar">
          <span className="source-page-search-bar-icon">
            <i className="fas fa-search"></i>
          </span>
          <input className="source-page-search-input" type="text" placeholder="Search..."/>
        </div>
        <div className="source-title">
          Hello {props.source.title}!
        </div>
      </div>
    </div>
  );
};

export default SourcePage;

