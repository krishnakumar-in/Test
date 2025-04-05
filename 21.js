const fs = require('fs');

fs.rename('./MyFolder/newfile.txt', './MyFolder/newFileAsync.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Renamed Successfully!');
});