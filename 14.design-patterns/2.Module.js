var Module = (function () {
    var privateMethod = function () {}
    return {
        publicMethodOne: function () {
            return 'This is public method one';
        },
        publicMethodTwo: function () {
            return 'This is public method two';
        },
        publicMethodThree: function () {
            return 'This is public method three';
        }
    }
})()

console.log(Module)
console.log(Module.publicMethodOne)

var Module = (function () {
    var myObj = {}
    var privateMethod = function () {}
    myObj.someMethod = function () {

    }
    return myObj;
})();

console.log(Module)

var Module = (function () {
    var privateMethod = function () {}

    var myObj = {
        someMethod: function () {},
        anotherMethod: function () {}
    }

    return myObj;
})();

console.log(Module)

