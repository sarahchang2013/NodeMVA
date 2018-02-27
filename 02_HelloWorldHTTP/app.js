var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("This is a web server built on nodeJS.\n");
    response.end("Created by Shangyan Zhang\n");
});

server.listen(7000);
