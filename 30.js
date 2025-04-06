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
    } else if(url === '/index.html'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if(url === '/styles.css'){
            res.writeHead(200, {'content-type': 'text/css'});
            res.write(homeStyles);
            res.end();
    } else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    } else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    } else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("About Page");
        res.end();
    } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("404, Not Found");
        res.end();
    }
});

server.listen(5000, () => {
    console.log('Server listening at port 5000');
});