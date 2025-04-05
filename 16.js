const fs = require('fs');
const data = "Hi! this is newfile.txt";
//it creates new file and write data to it 
//or if file present it delete data and add new data
fs.writeFile('./Myfolder/newfile.txt', data, (err) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Write to file successfully!');
    }
});