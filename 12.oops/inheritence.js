function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

function Student(age) {
    this.age = age;
}

// inherit the properties of parent

// this is how inheritence works in javascript
Student.prototype = new Person('sumit', 'kushwah')

Student.prototype.getAge = function () {
    return this.age;
}

var s = new Student(45)

console.log(s.firstName)
console.log(s.lastName)
console.log(s.age)
console.log(s.getFullName())
console.log(s.getAge())
