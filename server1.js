const http = require('http');
const PORT = 7000;


function handleRequest(request, response) {
	response.end("You have very nice pizza.")
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Port: http://localhost:%s", PORT)
});

const PORT2 = 7500;


function handleRequest2(request, response) {
	response.end("There's something on this pizza that I don't like. More toppings!")
};

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
	console.log("Port2: http://localhost:%s", PORT2)
});
