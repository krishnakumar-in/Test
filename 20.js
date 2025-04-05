const fs = require('fs');

fs.readdir('./MyFolder', (err, files) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Directory read successfully, here are the files.');
        console.log(files);
    }
});