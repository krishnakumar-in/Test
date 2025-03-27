const personPrototype = {
    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
};

function Person(name){
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);

const reuben = new Person("Reuben");
reuben.greet();

console.log(Object.hasOwn(reuben, "name"));
console.log(Object.hasOwn(reuben, "greet"));
