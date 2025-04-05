function functionFirst(){
    console.log('Hello my First Function');
}

function functionSecond(){
    console.log('Hello my Second Function');
}

module.exports = {
    foo: 'bar',
    functionFirst: functionFirst,
    functionSecond: functionSecond
};