const path = require("path")

const myPathResolve = path.resolve('../localModule/fs.js')
const myPathJoin = path.join('../localModule, fs.js')

console.log(myPathResolve);
console.log(myPathJoin);