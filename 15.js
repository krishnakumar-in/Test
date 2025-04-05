const fs = require('fs');

fs.mkdir('./MyFolder', (err) => {
    if(err){
        console.log('Error Creating Folder!');
    } else {
        console.log('Folder created Successfully!');
    }
});