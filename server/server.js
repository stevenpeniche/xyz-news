import express from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));