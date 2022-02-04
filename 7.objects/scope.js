var person = {
    firstName: 'sumit',
    lastName: 'kushwah',
    city: 'Mainpuri',
    age: 22
}

person.firstName = 'amit' // update
person.email = 'sumit@t.com' // create
delete person.city // delete
console.log(person) // read

// Object.preventExtensions()

var preventObject = {
    name: 'amit',
    city: 'agra',
    age: 18
}

Object.preventExtensions(preventObject) // we can not add properties

preventObject.name = 'aryan' // updating working
delete preventObject.age // deleting working
preventObject.email = 'aryan@t.com' // we can not add new property (here email)

console.log(preventObject)

var sealObject = {
    name: 'amit',
    city: 'agra',
    age: 18
}

Object.seal(sealObject) // add and delete will not work

sealObject.name = 'aarush' // updating working
delete sealObject.age // deleting will not work
sealObject.email = 'aryan@t.com' // we can not add new property (here email)

console.log(sealObject)

var freezeObject = {
    name: 'amit',
    city: 'agra',
    age: 18,
    address: {
        city: 'mainpuri',
        state: 'up',
        country: 'india'
    }
}

Object.freeze(freezeObject) // nothing will work
Object.freeze(freezeObject.address)

freezeObject.name = 'aarush' // this will not work
delete freezeObject.age // deleting will not work
freezeObject.email = 'aryan@t.com' // we can not add new property (here email)
freezeObject.address.state = 'kerala'

console.log(freezeObject)

var output = JSON.parse(JSON.stringify(freezeObject))
output.email = 'aarush@t.com'
console.log(output)