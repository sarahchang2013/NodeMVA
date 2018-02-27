var net = require('net');

//net.createServer([options][, connectionListener])
// The handler argument is automatically set as a listener for the 'connection' event
var server = net.createServer(function (socket) {
	//socket is created by the client.
    console.log("Connection from " + socket.remoteAddress);
    socket.end("Hello World\n");
});

server.listen(7000, "127.0.0.1");
