const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const COMMENTS_FILE = path.join(__dirname, 'news.json');

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      throw new Error('Something bad happened!');
    }

    res.json(JSON.parse(data));
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
