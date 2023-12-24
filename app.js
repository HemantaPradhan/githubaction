// Importing the 'http' module
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Sending the response
  res.end('Hello, World!\n');
});

// Specifying the port to listen on
const port = 3000;

// Making the server listen on the specified port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
