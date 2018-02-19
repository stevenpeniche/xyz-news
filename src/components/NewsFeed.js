import React from 'react';
import './NewsFeed.css';

const NewsFeed = (props) => {
  let hasImage = false;

  return (
    <div className="news-feed-container">
      <div className="news-feed-card">
        {
          hasImage ?
          <div className="news-feed-card-img-container">
            <img
              className="news-feed-card-img"
              src="http://via.placeholder.com/320x240"
              alt="news"
            />
          </div>
          :
          <div></div>
        }
        <div className="news-feed-card-title">
          My YC app: Dropbox - Throw awaydsfdsffdsf your USB drive
        </div>
        <div className="news-feed-card-author">
          - Steven Peniche
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;