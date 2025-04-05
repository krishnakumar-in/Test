const EventEmitter = require('events');
const myevent = new EventEmitter();

const greetBirthday = (name, age) => {
    console.log(`Happy Birthday: ${name}, you are now ${age}!`);
};

// Listening for the birthdayEvent
myevent.on('Birthday', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myevent.emit('Birthday', 'XYZ', '30');