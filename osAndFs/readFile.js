const fs = require('fs');

const read = fs.readFile('./osAndFs/readThis.txt', 'utf8', (err, data) => {
    console.log(data)
})

const readSync = fs.readFileSync('hello.txt', 'utf8')
console.log(read);
console.log(readSync);