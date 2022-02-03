function Student(fName, lName){
    this.firstName = fName
    this.lastName =lName
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

var stuObj1 = new Student("Scott", "Desatnick")
console.log(stuObj1)
console.log(stuObj1.getFullName())

var stuObj2 = new Student("Adam", "Colson")
console.log(stuObj2)
console.log(stuObj2.getFullName())