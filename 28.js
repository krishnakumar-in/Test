const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('This is Home Page');
    } else if(req.url === '/about'){
        res.end('This is About Page');
    } else if(req.url === '/Contact'){
        res.end('This is Contact Page');
    } else {
        res.end('404, Resource not found!');
    }
});
server.listen(5000, () => {
    console.log('Server Listening at the port 5000!');
});