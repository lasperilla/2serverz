const http = require('http');
const PORT = 7000;
const PORT2 = 7500;

let complimentArr = ["You remind me of pizza", "Your apartment smells of rich mahogany.", "You're the man now dog!", "10 10 10: You"]

function handleRequest(request, response) {
    let randCompliment = complimentArr[Math.floor(Math.random() * complimentArr.length)];
    response.end(randCompliment);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Port: http://localhost:%s", PORT)
});

//============================

let insultsArr = ["Boil-dripping beef, fart-sniffing bubble butt!", "You are fart factory, slug-slimed, sack-of-rat-guts-in-cat-vomit, cheesy, scab-picked, pimple-squeezing finger bandage. A week old maggot burger with everything on it and flies on the side!", "Substitute chemistry teacher.", "Mung tongue.", "Math Tutor", "Prison Barber", "Mother Lover", "Nearsighted gynecologist.", "In your face, camel cake!", "In your rear, cow derriere.", "Lying, crying, spying, prying ultra-pig.", "You lewd, crude, rude, bag of pre-chewed food dude."]

function handleRequest2(request, response) {
    let randInsult = insultsArr[Math.floor(Math.random() * insultsArr.length)];
    response.end(randInsult);
};

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
    console.log("Port2: http://localhost:%s", PORT2)
});