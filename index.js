var http = require("http");
var url = require("url");

var server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end();
});

server.listen(80);