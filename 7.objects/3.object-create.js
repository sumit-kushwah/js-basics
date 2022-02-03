var person = Object.create({})


person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName = "city"
person[cityName] ="Boston"

person.age = 45

person.address = Object.create({})

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