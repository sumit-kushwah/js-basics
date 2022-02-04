// let add = function (x, y) {
//     return x + y;
// }
//
// console.log(add(10, 20))

// fat arrow function
// let add = (x, y) => x + y;

// console.log(add(10, 20))

let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers)

let names = ['sumit', 'amit', 'aryan', 'ankit']

let lengths = names.map(name => name.length)

console.log(lengths)

// with no parameters

// let logdocument = () => console.log(window.document)

// logdocument()

console.log(
    (
        () => {
            return 34
        }
    )()
)

let setColor = (color) => ({ color })

console.log(setColor('blue'))