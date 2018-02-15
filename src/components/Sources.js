import React from 'react';
import { Link } from 'react-router-dom';

const Sources = (props) => {
  return (
    <div className="Sources">
    {props.sources.map((source, i) => {
      return (
        <div key={i}>
          <Link to={`/${source.path}`} className="source-link">{source.title}</Link>
        </div>
      )
    })}
    </div>
  );
}

export default Sources;