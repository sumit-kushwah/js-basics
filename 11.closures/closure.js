function greet(message) {
    var display = ' display'
    return function (name) {
        console.log(message + ' ' + name + display);
    }
}

var output = greet('Welcome');

output('sumit kushwah')