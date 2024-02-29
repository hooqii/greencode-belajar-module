const fs = require('fs');

for (let index = 1; index <= 10; index++) {
    fs.unlinkSync(`Defri${index}.txt`)
}
