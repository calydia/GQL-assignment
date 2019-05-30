const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = 4000;
const url = 'https://countries.trevorblades.com';

app.use('/', (req, res, next) => {
  req.headers['Authorization'] = 'Bearer 29hfk32g8gh3jhfjj2gsh';
  req.headers['Client-App-ID'] = 'myapp';
  console.log(req.headers);
  next();
});

app.use('/', proxy(url));

app.listen(port, () => {
  console.log('Proxy listening on port ' + port);
});