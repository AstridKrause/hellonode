// load the http module
var http = require('http');
var fs = require('fs');

// xconfigure our HTTP server

http.createServer(function  (req, res) {
  fs.readFile('demofile2.html', function(err, data) {
      if (err) {
         return console.log(err);
      }

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });
}).listen(8080); 
