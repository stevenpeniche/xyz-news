import React from 'react';
import './HackerNewsFeed.css';

const HackerNewsFeed = (props) => {
  return (
    <div className="hacker-news-feed-container">
      <div className="hacker-news-feed-card">
        <div className="hacker-news-feed-card-header">
          <div className="hacker-news-feed-card-rank">
            #1
          </div>
          <div className="hacker-news-feed-card-title">
            My YC app: Dropbox - Revolutionary and beautiful
            and amazing and ugly
          </div>
        </div>
        <div className="hacker-news-feed-card-footer">
          <div className="hacker-news-feed-card-author">
            800 points | by Steven Peniche | 3 hours ago | 25 comments
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackerNewsFeed;