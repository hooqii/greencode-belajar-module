// Comment: Mengimpor module lokal yang telah di buat 

const math = require('./helper/math') 
const {sayHello} = require('./helper/say-hello') 


console.log(math.increment(2,4));
console.log(math.decrement(4,2));
console.log(sayHello("Alex"))