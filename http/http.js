const http = require('http');
const fs = require('fs');

const port = 8000;

// Membuat server HTTP
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        const data = fs.readFileSync('./home.html');
        res.end(data);
    } else if (req.url === "/alex") {
        const data = fs.readFileSync('./alex.html');
        res.end(data)
    } else {
        res.end("Hello JavaScript");
    }
})

// Mendengarkan permintaan pada kode tertentu
server.listen(port, () => {
    console.log(`Server berjalan di ${port}`)
})


