const fs = require('fs');

if (fs.existsSync("Hello.txt",)) {
    console.log("File Exist")
} else {
    console.log("Missing File")
}