// load the http module
var http = require('http');
var fs = require('fs');


// xconfigure our HTTP server
var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('demofile3.html', function(err, data3) {
      if (err) {
         return console.log(err);
      }
     response.write(data3);
     	response.write('<tr><td>APP_ENV</td><td>' + process.env.APP_ENV + '</td></tr>');
	response.write('<tr><td>LOGLEVEL</td><td>' + process.env.LOGLEVEL + '</td></tr>');
     	response.write('<tr><td>SMTP_SERVER</td><td>' + process.env.SMTP_SERVER + '</td></tr>');
	response.write('<tr><td>DATABASE_NAME</td><td>' + process.env.DATABASE_NAME + '</td></tr>');
     	response.write('<tr><td>DATABASE_TYPE</td><td>' + process.env.DATABASE_TYPE + '</td></tr>');
	response.write('<tr><td>DATABASE_URL</td><td>' + process.env.DATABASE_URL + '</td></tr>');
	response.write('</tbody> </table> </main>');
	response.write('<footer> <p>Team</p> <ul> <li>Christian Jakl</li> <li>Lutz Kiefer</li> <li>Astrid Krause</li> <li>Guenter Krause</li> 	<li>Simone Kuebler</li>	<li>Heribert Roth</li>   </ul>  </footer>');
	response.write('</body></html>\n');
     response.end();

  });


});


// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");
