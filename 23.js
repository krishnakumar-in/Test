// Importing 'events' module and creating an instance of the EventEmitter Class
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener Function - welcomeUser()
const welcomeUser =  () => {
    console.log('Hi! there, Welcome to the User.');
};

// Listening for the userJoined event using the on() method
myEmitter.on('userJoined', welcomeUser);

// Emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');