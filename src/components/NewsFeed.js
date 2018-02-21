import React from 'react';
import './NewsFeed.css';

const NewsFeed = (props) => {
  let array = [
    {hasImage: false},
    {hasImage: true},
    {hasImage: false},
    {hasImage: true},
    {hasImage: true},
    {hasImage: false},
    {hasImage: true},
    {hasImage: false},
    {hasImage: false},
    {hasImage: false},
    {hasImage: true},
    {hasImage: true},
    {hasImage: false},
  ];

  return (
    <div className="news-feed-container">
      <div className="news-feed-cards-container">
      {
        array.map((article, i) => {
          return (
            <div className="news-feed-card" key={i}>
              {
                article.hasImage ?
                <div className="news-feed-card-img-container">
                  <img
                    className="news-feed-card-img"
                    src="http://via.placeholder.com/280x300"
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
          )
        })
      }
      </div>
    </div>
  );
}

export default NewsFeed;