function greet(){
     return 'Greet is called'
}

console.log(greet())

function getName(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(getName()) // undefined undefined
console.log(getName('Scott')) // Scott undefined
console.log(getName('Scott', 'Desatnick'))
console.log(getName(1,2))

// var output = 1+ 2+"Uma" + 3 + 4
// console.log(output)