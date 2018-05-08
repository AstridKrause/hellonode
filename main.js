// load the http module
var http = require('http');
var fs = require('fs');

// xconfigure our HTTP server

http.createServer(function  (req, res) {
  fs.readFile('demofile2.html', function(err, data) {
      console.log('Step 1');
      if (err) {
         return console.log(err);
      }
      console.log('Step 2');
      res.writeHead(200, '{'Content-Type': 'text/html'});
      console.log('Step 3);

      res.write(data);
      console.log('Step 4');

      res.end();
  });
}).listen(8080); 
