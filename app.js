console.log('Hello nodejs!');

console.log('Running the project...');
const http = require('http');

http.createServer((req, res) => {
    if (req.url == '/index.html' || req.url == '/')
        res.write(`<h1 style="color:green">Welcome to my home page</h1>`)
    else
        // write a response to the client
        res.write(`You tried to browse to url: ${req.url} which is not supported`);

    res.end(); //end the response
}).listen(3000); //the server object listens on port 8080