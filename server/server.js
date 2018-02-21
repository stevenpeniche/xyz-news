import express from 'express';
require('dotenv').config();
import NewsAPI from 'newsapi';

const app = express();
const port = process.env.PORT;

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

app.get('/newsapi', (req, res) => {
  if(Object.keys(req.query).length !== 0 && req.query.source) {
    newsapi.v2.everything({
      sources: req.query.source,
      language: 'en'
    }).then((response) => {
      res.status(200).send(response.articles);
    });
  } else {
    res.status(400).send();
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));