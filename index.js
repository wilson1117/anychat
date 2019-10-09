var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;
    console.log('Connect path: ' + path);
    switch (path) {
        case '/':
            fs.readFile(__dirname + '/web/index.html', (err, data) => {
                if (!err) {
                    res.writeHead(200);
                    res.write(data, 'utf-8');
                    res.end();
                } else {
                    res.writeHead(404);
                    res.write("404 Not found");
                    res.end();
                }
            });
    }
});

server.listen(80);