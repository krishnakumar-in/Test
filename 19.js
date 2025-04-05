const fs = require('fs');

try{
    //write to file synchronously
    fs.writeFileSync('./Myfolder/myFileSync.txt', "Hi! This is my first Sync file.");
    console.log("Write Operation successful!");

    //Read the file synchronously
    let filedata = fs.readFileSync('./Myfolder/myFileSync.txt', 'utf-8');
    console.log("Read Operation successfull!");
    console.log(filedata);
} catch(err){
    console.log('Error Occurred!');
    console.log(err);
}