var express = require('express');
var app = express();
var http = require('http');
var httpserver = http.Server(app);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/calculator.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
