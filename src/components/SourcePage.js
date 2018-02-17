import React from 'react';
import './SourcePage.css';

const SourcePage = (props) => {
  return (
    <div className="source-page">
      <div className="source-title">
        Hello {props.source}!
      </div>
    </div>
  );
};

export default SourcePage;

