import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import shortid from 'shortid';
import './NewsFeed.css';

const NewsFeed = (props) => {
  return (
    <div className="news-feed-container">
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 600: 2, 900: 3}}>
        <Masonry columnsCount={3}>
          {
            props.topicData.map((article) => {
              return (
                <a className="news-feed-card-link" key={shortid.generate()} href={article.url} target="_blank">
                  <div className="news-feed-card levitate animated fadeIn" >
                    {
                      article.urlToImage !== null?
                      <div className="news-feed-card-img-container animated fadeIn">
                        <img
                          className="news-feed-card-img"
                          src={article.urlToImage}
                          alt="news"
                          style={article.source.id === "bleacher-report"? {maxWidth: "280px"}:{} }
                        />
                      </div>
                      :
                      <div></div>
                    }
                    <div className="news-feed-card-title">
                      {article.title}
                    </div>
                    <div className="news-feed-card-author">
                      {article.author ? `by ${article.author}` : ""}
                    </div>
                    <div className="news-feed-card-description">
                      {article.description ? article.description : ""}
                    </div>
                  </div>
                </a>
              )
            })
          }
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default NewsFeed;