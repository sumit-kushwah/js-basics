//1. can be Invoked inside another function
function a(){
    b()
}

function b(){
    console.log('b is called from a')
}
a()
console.log(a())

//2. assign to a variable
var c = function(){

}

console.log(c)
//3. passed as a parameter to another variable

function callback(caller){
    console.log(caller)
    console.log(caller())
}

var test = function(){
    console.log('This is a test function')
}

callback(test)
