var Module = (function () {
    var privateMethod = function () {
        console.log('This is private')
    }
    var someMethod = function () {
        console.log('This is some method')
    }
    var anotherMethod = function () {}

    return {
        getData: someMethod,
        fetchData: anotherMethod
    }
})()

// console.log(Module.getData())

var Module = (function () {
    var privateMethod = function (message) {
        console.log(message)
    }

    var publicMethod = function (text) {
        privateMethod(text)
    }
    return { getInfo: publicMethod }
})()

Module.getInfo('calling private method');