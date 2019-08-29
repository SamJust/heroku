const jwt = require('jsonwebtoken');
const app = require('express')();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.use((req, res) => {
    const filename = req.url === '/'? '/index.html' : req.url;
    console.log(filename);
    
    const stream = fs.createReadStream(path.join(__dirname, '/static', filename));
    stream.pipe(res);
})

app.listen(PORT, () => {
    console.log('litesning ' + PORT);
});