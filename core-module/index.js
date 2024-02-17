// Comment: Menginisialisasi core module dari yang di sediakan node

const os = require('os');
const http = require('node:crypto');

// Comment: Mencetak output ke console
console.log(os.platform());
console.log(http.randomUUID());