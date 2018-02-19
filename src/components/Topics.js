import React from 'react';
import shortid from 'shortid';
import './Topics.css';

const Topics = (props) => {
  return (
    <div className="source-topics-container">
      <div className="source-topics">
        <div className="topics-header">
          Topics
        </div>
        <ul className="topics-list">
          {props.topics.map((topic) => {
            return (
              <li
                className={topic === props.currentTopic ? "topic active-topic" : "topic"}
                key={shortid.generate()}
                onClick={() => props.changeCurrentTopic(topic)}
              >
                {topic}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Topics;