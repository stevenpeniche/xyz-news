import React from 'react';
import './SourcePage.css';

const SourcePage = (props) => {
  return (
    <div className="source-page">
      <div className="source-title">
        Hello {props.source.title}!
      </div>
      <div>
        <img src={props.source.faviconURL} alt={props.source.title} />
      </div>
    </div>
  );
};

export default SourcePage;

