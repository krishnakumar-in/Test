const personPrototype = {
    greet(){
        console.log('Hello!');
    }
};
const carl = Object.create(personPrototype);
carl.greet();