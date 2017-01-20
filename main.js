var http = require("http");

http.createServer(function (request, response) {

	var path = require('path');
	var userName = process.env['USERPROFILE'].split(path.sep)[2];

	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// Send the response body as "Hello World"
	response.end('Hello ' + userName + ' welcome again to the Node.JS World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

//TODO: Add child process to fire the browser
