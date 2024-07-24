// create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const comments = [];
const server = http.createServer(function(req, res) {
    const parseUrl = url.parse(req.url);
    const parseQuery = querystring.parse(parseUrl.query);
    if (parseUrl.pathname === '/addComment') {
        comments.push(parseQuery);
    }
    fs.readFile('comments.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});
server.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});