import React from 'react';
import Waypoint from 'react-waypoint';
import Topics from './Topics';
// import SearchBar from './SearchBar'; Hide for Now
import NewsFeed from './NewsFeed';
import './SourcePage.css';

const SourcePage = (props) => {
  return (
    <div className="source-page">
      <div className="source-page-sidebar">
        <div className="source-page-identifier">
          <div className="source-icon-container">
            <img
              className="source-icon animated fadeIn"
              src={props.source.faviconURL}
              alt={props.source.title}
              style={{backgroundColor: props.source.primaryColor}}
            />
          </div>
        </div>
        <Topics
          topics={props.source.topics}
          currentTopic={props.currentTopic}
          changeCurrentTopic={props.changeCurrentTopic}/>
      </div>
      <div className="source-page-main">
        <NewsFeed topicData={props.topicData}/>
      </div>
      <Waypoint
        onEnter={console.log('Entered')}
        bottomOffset='-2000px'>
        <div className="jump-icon">
          <i className="fas fa-angle-double-up"></i>
        </div>
      </Waypoint>
    </div>
  );
};

export default SourcePage;

