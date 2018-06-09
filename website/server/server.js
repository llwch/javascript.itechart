const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('dummy');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});