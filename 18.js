const fs = require('fs');

fs.readFile('./Myfolder/newfile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log("File read successfully here is the data!");
        console.log(data);
    }
});