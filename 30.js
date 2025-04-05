const http = require('http');
const fs = require('fs');

// Get the contents of the HTML, CSS, JS and Logo files
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyles = fs.readFileSync('./navbar-app/styles.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

// Creating the Server
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if(url === '/navbar-app/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    } else if(url === '/navbar-app/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    } else if(url === '/navbar-app/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg'});
        res.write(homeLogo);
        res.end();
    } else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found</h1>');
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server listening at port 5000');
});