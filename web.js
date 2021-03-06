var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var INDEX = "index.html";

app.get('/', function(request, response) {
   var buffer = fs.readFileSync(INDEX); 
   response.setHeader('Content-Type','text/html');
   response.setHeader('Content-Length',buffer.length);
   response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
