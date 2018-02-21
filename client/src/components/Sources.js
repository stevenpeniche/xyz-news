import React from 'react';
import { Link } from 'react-router-dom';
import './Sources.css';

const Sources = (props) => {
  return (
    <div className="sources">
    {props.sources.map((source) => {
      return (
        <Link to={`/${source.id}`} key={source.id} className="source" >
          <div className="source-icon-container">
            <img className="source-icon leviate" src={source.faviconURL} alt={source.title} style={{backgroundColor: source.primaryColor}}/>
          </div>
          <div className="source-title">
            {source.title}
          </div>
        </Link>
      )
    })}
    </div>
  );
}

export default Sources;