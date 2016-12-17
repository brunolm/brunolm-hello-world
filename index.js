const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Started!');
});
