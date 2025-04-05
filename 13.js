const path = require('path');

const mypath = "C:\Users\KHV\ObjectPratice\text-1.js";

const pathInfo = {
    filename: path.basename(mypath),
    dirname: path.dirname(mypath),
    extname: path.extname(mypath),
    isabsolute: path.isAbsolute(mypath),
    detailInfo: path.parse(mypath)
};

console.log(pathInfo);