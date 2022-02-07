class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPersonName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends Person {
    constructor(age) {
        super();
        this.age = age;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

var s = new Student(21)
var p = new Person('amit', 'kushwah')
s.firstName = 'sumit';
s.lastName = 'kushwah';
console.log(s.getPersonName())
console.log(p.getPersonName())
console.log(s.age)