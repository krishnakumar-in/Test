const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const sayHello = () => {
    console.log('Hello! User.');
};

const sayHi = () => {
    console.log('Hi! User.');
};

const greetNewUser = () => {
    console.log('Happy New Year.');
};

myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewUser);

myEmitter.emit('userJoined');