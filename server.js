const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
        res.end();
    }

    if (req.url === '/api') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end("API");
    }

    res.writeHead(404);
    res.end();
}).listen(3000, () => {
    console.log("Server is running on port 3000");
});