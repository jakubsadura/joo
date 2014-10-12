var http = require('http');

var app = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify('Hello my friend, nice to see you here!'));
  console.log('A friend came to see us');
});

app.listen(3000);
