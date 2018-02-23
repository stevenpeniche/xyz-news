import React from 'react';
import './Topics.css';

const Topics = (props) => {
  return (
    <div className="source-topics-container">
      <div className="source-topics animated fadeIn">
        <div className="topics-header">
          Topics
        </div>
        <ul className="topics-list">
          {props.topics.map((topic) => {
            return (
              <li
                className={topic.name === props.currentTopic ? "topic active-topic" : "topic"}
                key={topic.name}
                onClick={() => props.changeCurrentTopic(topic.name)}
              >
                {topic.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Topics;