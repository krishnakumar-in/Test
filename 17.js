const fs = require('fs');
const data = "Hi! this is newfile.txt";
//it creates new file and write data to it 
//or if file present it will not delete present data 
//but, add new data at the end
fs.writeFile('./Myfolder/newfile.txt', data, {flag: 'a'}, (err) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Write to file successfully!');
    }
});