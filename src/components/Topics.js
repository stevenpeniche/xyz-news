import React from 'react';
import shortid from 'shortid';
import './Topics.css';

const Topics = (props) => {
  return (
    <div className="source-topics">
      <div className="topics-header">
        Topics
      </div>
      <ul className="topics-list">
        {props.topics.map((topic) => {
            return <li className="topic" key={shortid.generate()}>{topic}</li>
        })}
      </ul>
    </div>
  );
};

export default Topics;