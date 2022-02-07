// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function() => {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let s = new Student('sumit', 'kushwah')

console.log(s)
console.log(s.getFullName())