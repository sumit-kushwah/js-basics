var person = {
	"name": "Uma",
	"city": "Hyderabad"
}

console.log(person)

var student = {"firstName": 'Tuan', "lastName": 'Bui'}
var jsonStringify = JSON.stringify(student)
console.log(student, typeof student)
console.log(jsonStringify, typeof jsonStringify)

var jsonParse = JSON.parse(jsonStringify)
console.log(jsonParse, typeof jsonParse)


