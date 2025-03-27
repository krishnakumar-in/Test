const myDate = new Date(1995, 11, 17);
console.log(myDate.getTime());

myDate.getTime = function(){
    console.log('Something else!');
}

myDate.getTime();