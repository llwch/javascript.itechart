const http = require('http');
const fs = require('fs');
const url = require ('url');
const config = JSON.parse(fs.readFileSync('config.json'));
const hostname = config.ip;
const port = config.port;
const server = http.createServer();
var showSite = fs.readFileSync('/Users/tibraid/Documents/javascript.itechart/website/index.html');

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(showSite);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});