const fs = require('fs');

fs.unlink('./MyFolder/myFileAsync.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File is Deleted!');
});