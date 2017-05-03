const http = require('http');
const PORT = 7000;


function handleRequest(request, response) {
	response.end("You have very nice pizza.")
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Port: http://localhost:%s", PORT)
});
