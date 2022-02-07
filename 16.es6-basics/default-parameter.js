function sayHello(msg) {
    msg = msg !== undefined ? msg : 'Hi';
    console.log(msg)
}

// sayHello('hi sumit')

function wish(message='Hi sumit!!') {
    console.log(message)
}

wish()
wish('Hi amit')