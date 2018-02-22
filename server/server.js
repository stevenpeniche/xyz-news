import express from 'express';
require('dotenv').config();
import NewsAPI from 'newsapi';

const app = express();
const port = process.env.PORT;

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

app.get('/newsapi', (req, res) => {
  if(Object.keys(req.query).length !== 0) {
    const source = req.query.source;
    const keyword = req.query.q;

    if(source && !keyword) {
      newsapi.v2.everything({
        sources: source,
        language: 'en'
      }).then((response) => {
        res.status(200).send(response.articles);
      });
    } else if(source && keyword) {
      newsapi.v2.everything({
        sources: source,
        q: keyword,
        sortBy: 'publishedAt',
        language: 'en'
      }).then((response) => {
        res.status(200).send(response.articles);
      });
    }

  } else {
    res.status(400).send();
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));