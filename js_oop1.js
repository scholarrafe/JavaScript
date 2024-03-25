 // Json type object
const Person = {
    firstName : 'Jhon', //instance
    lastName : 'Doe',
    email : 'jhon@gmail.com',
    fullName : function (){
        return `${this.firstName} ${this.lastName}`
    },
    greet(){
        return "Hi "+this.firstName+" "+this.lastName+" form greet function"
    },
};

console.log(Person.email);
console.log(Person.lastName);
console.log(Person.fullName());
console.log(Person.greet());

const Person1 = Object.create(Person); // clone object

console.log(Person1.email);
console.log(Person1.lastName);
console.log(Person1.fullName());
console.log(Person1.greet());

// class type object

class PersonClass {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    greetclass (){
        return "Hi "+ this.firstName +" "+this.lastName+" from PersonClass"
    }
}


const person1 = new PersonClass("Javan", "Karim")

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.greetclass())

const person2 = new PersonClass("Adil", "Rashid")

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.greetclass())

