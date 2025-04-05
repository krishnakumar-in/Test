const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>This is Home Page</h1>')
        res.end();
    } else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>This is About Page</h1>');
        res.end();
    } else if(req.url === '/Contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>This is Contact Page</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404, Resource not found! <a href="/">Go Back Home</a></h1>');
        res.end();
    }
});
server.listen(5000, () => {
    console.log('Server Listening at the port 5000!');
});