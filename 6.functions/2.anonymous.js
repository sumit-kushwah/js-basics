var sample = function (){
    return "Hello"
}

var output = sample()
console.log(output)

// var getFulName = function(){
//     return "Scott" + " " + "Desatnick"
// }

var getFulName = function(firstName, lastName){
    return firstName + ' '+ lastName
}

console.log(getFulName('Scott', 'Desatnick'))
console.log(getFulName('Adam', 'Colson'))
console.log(getFulName('Tuan', 'Bui'))
