import React from 'react';
import Topics from './Topics';
import SearchBar from './SearchBar';
import HackerNewsFeed from './HackerNewsFeed';
import NewsFeed from './NewsFeed';
import './SourcePage.css';

const SourcePage = (props) => {
  return (
    <div className="source-page">
      <div className="source-page-sidebar">
        <div className="source-page-identifier">
          <div className="source-icon-container">
            <img className="source-icon" src={props.source.faviconURL} alt={props.source.title} />
          </div>
        </div>
        <Topics
          topics={props.source.topics}
          currentTopic={props.currentTopic}
          changeCurrentTopic={props.changeCurrentTopic}/>
      </div>
      <div className="source-page-main">
        <SearchBar />
        {
          props.source.path === '/hacker-news' ?
          <HackerNewsFeed />
          :
          <NewsFeed />
        }
      </div>
    </div>
  );
};

export default SourcePage;

