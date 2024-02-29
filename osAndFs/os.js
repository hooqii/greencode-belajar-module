const os = require('os');

const myCpuInfo = os.cpus
const myPlatform = os.platform
const myOsVersion = os.version
console.log(`My Cpu: ${myCpuInfo}`)
console.log(`my platform is: ${myPlatform}`)
console.log(`my OS version: ${myOsVersion}`)