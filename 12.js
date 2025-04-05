
const os = require('os');

const suptime = os.uptime();
const userInfo = os.userInfo();
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
};

console.log(suptime);
console.log(userInfo);
console.log(otherInfo);
