function Student(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function() {
    //     return this.firstName + ' ' + this.lastName;
    // }
}

// avoiding duplicate copies of method
Student.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

// extend the properties

Student.prototype.city = 'Delhi';

var student1 = new Student('sumit', 'kushwah')
// changes parent prototype property
student1.__proto__.city = 'Mainpuri'
console.log(student1.__proto__.city)

var student2 = new Student('aryan', 'kushwah')
console.log(student2)

var student3 = new Student('arush', 'kushwah')
console.log(student3.getFullName())
console.log(student3.city)

function Person() {
    this.name = 'Ankit Mishra'
    this.gender = 'M'
}

var personObj = new Person()

console.log(Person.prototype)
console.log(personObj.prototype)
console.log(personObj.__proto__)

console.log(typeof Person.prototype)
console.log(typeof personObj.__proto__)