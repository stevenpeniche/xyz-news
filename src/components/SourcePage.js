import React from 'react';
import './SourcePage.css';

const SourcePage = (props) => {
  return (
    <div className="source-page">
      <div className="source-title">
        Hello {props.sourceTitle}!
      </div>
      <div>
        <img src={props.source.faviconURL} alt={props.sourceTitle} />
      </div>
    </div>
  );
};

export default SourcePage;

