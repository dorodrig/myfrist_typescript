"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person("Clark", "Kent");
console.log(person1.getFullName());
class Teacher extends Person {
    constructor(firstName, lastName, code) {
        super(firstName, lastName);
        this.code = code;
    }
}
const teacher1 = new Teacher("Louise", "Lane", "001");
console.log(teacher1.getFullName());
const teacher2 = new Teacher("Bruce", "Wayne", "002");
console.log(teacher2.getFullName());
class Student extends Person {
    constructor(firstName, lastName, avg) {
        super(firstName, lastName);
    }
}
const student1 = new Student("Diane", "Prince", 3.2);
console.log(student1.getFullName());
const student2 = new Student("Barry", "Allen", 4.3);
console.log(student2.getFullName());
const persons = [];
persons.push(new Teacher("Arthur", "Curry", "003"));
persons.push(new Student("Slade", "Wilson", 4.8));
persons.push(new Teacher("Selina", "Kyle", "004"));
persons.push(new Student("Jason", "Todd", 3.5));
persons.push(new Student("Oliver", "Queen", 2.5));
persons.forEach((person) => console.log(person.getFullName()));
