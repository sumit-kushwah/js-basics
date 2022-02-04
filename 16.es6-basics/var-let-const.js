function sample() {
    var foo = 'blue';
    console.log(foo)
}

// console.log(foo)

// block scope

if (true) {
    var foo = "hello"
    let bar = "how are you"
    const baz = "I am fine"

    // console.log(foo)
    // console.log(bar)
    // console.log(baz)
}
// console.log(foo)
// console.log(bar)
// console.log(baz)

// redefining

function sample() {
    let foo = 1;
    foo = 100;

    // let foo = 101;
    // console.log(foo);

    const count = 200;
    // count = 300
    // console.log(count)
}

// sample()

// constant should be used for primitive types
const skills = ['javascript', 'reactjs', 'nodejs']

skills.push('Angular')

console.log(skills)


