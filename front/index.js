const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const filepath = req.url === '/' ? '/index.html' : req.url;
    console.log(filepath);
    
    if (filepath === '/favicon.ico') {
        res.end();
        return;
    }
    const file = fs.readFileSync(__dirname + filepath);
    res.writeHead(200, {
        'Content-Type': filepath.split('.')[1] === 'html' ? 'text/html' : 'text/javascript'
    });
    res.end(file);
}).listen(3001, () => console.log('Listening'));