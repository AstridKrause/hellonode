// load the http module
var http = require('http');
var fs = require('fs');

// configur= e our HTTP server
var server = http.createServer(function (request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.end("UNDERDOCKS DEVOPS EXAMPLE Application\nWELCOME "+process.env.MYENV);
   fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
     res.end();
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");
