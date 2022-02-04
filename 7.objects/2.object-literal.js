var person = {} // Object Literal Syntax


person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName = "city"
person[cityName] ="Boston"

person.age = 45

person.address = {}

person.address.street = "1st Main"
person.address.state = "Massachusetts"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])
console.log(person[cityName])
console.log(person.age)
console.log(person["address"]["street"])
console.log(person.address.state)

var student = {
    id: 1,
    name: 'Scott Desatnick',
    isAdmin: true,
    getName: function(){
        return "Here is your name"
    },
    info: {grade: 'A+'},
    subjects: ["Maths", "Physics","Chemistry"]
}

student.city= "Boston"

console.log(student)
console.log(student.id)
console.log(student.name)
console.log(student.city)
console.log(student.getName())
console.log(student.info)
console.log(student.subjects)