const http = require('http');

const server = http.createServer((request, response) => {
  const body = '{"ReturnVal" : "Hello World!"}';
    response.
      writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'application/json'
      })
    .end(body);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
