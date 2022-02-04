'use strict' // react works in this mod

console.log(this)

function sample() {
    console.log(this)
}

sample.bind(this)();