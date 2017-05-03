const http = require('http');
const PORT = 7000;
const PORT2 = 7500;

let complimentArr = ["You have very nice pizza.", "Your apartment smells of rich mahogany.", "You're the man now dog!"]

function handleRequest(request, response) {
    let randCompliment = complimentArr[Math.floor(Math.random() * complimentArr.length)];
    response.end(randCompliment);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Port: http://localhost:%s", PORT)
});

//============================

let insultsArr = ["There's something on this pizza that I don't like.", "More toppings!", "Hey! Where Did You Get Those Clothes. At The Toilet Store?"]

function handleRequest2(request, response) {
    let randInsult = insultsArr[Math.floor(Math.random() * insultsArr.length)];
    response.end(randInsult);
};

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
    console.log("Port2: http://localhost:%s", PORT2)
});