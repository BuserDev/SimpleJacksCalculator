
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
  console.log('Node app is running on port', app.get('port'));
});


/*
Node.js is an open source, cross-platform runtime environment 
for server-side and networking applications. Node.js applications 
are written in JavaScript, and can be run within the Node.js runtime 
on OS X, Microsoft Windows, Linux, FreeBSD, NonStop and IBM i.

Express.js is a Node.js web application framework, 
designed for building single-page, multi-page, and hybrid web applications.
*/