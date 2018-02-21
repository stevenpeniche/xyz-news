import express from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/newsapi', (req, res) => {
  if(req.query) {
    res.status(200).send(req.query.source);
  } else {
    res.status(400).send(Error("Take a look at the API Query") );
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));