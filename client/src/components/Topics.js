import React from 'react';
import './Topics.css';

const Topics = (props) => {
  // Topic color function decorator to handle on hover color change
  const handleTopicColor = (e, callBack) => {
    if(e.target.className !== "topic active-topic") {
      callBack(e)
    }
  }

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
                style={topic.name === props.currentTopic ? {color: props.sourceColor} : {}}
                key={topic.name}
                onClick={() => props.changeCurrentTopic(topic.name)}
                onMouseOver={(e) => handleTopicColor(e, () => e.target.style.color = props.sourceColor)}
                onMouseOut={(e) => handleTopicColor(e, () => e.target.style.color = "#000000")}
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