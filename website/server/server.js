const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer();
var showSite = fs.readFileSync('/Users/tibraid/Documents/javascript.itechart/website/index.html');

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(showSite);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});