import React from 'react';
import { Link } from 'react-router-dom';

const Sources = (props) => {
  return (
    <div className="sources">
    {props.sources.map((source, i) => {
      return (
        <Link to={source.path} key={i} className="source">
          <div className="source-icon-container">
            <img className="source-icon" src={source.faviconURL} alt={source.title} />
          </div>
          <div className="hacker-news-title">
            {source.title}
          </div>
        </Link>
      )
    })}
    </div>
  );
}

export default Sources;