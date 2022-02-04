var person1 = { firstName: 'sumit', lastName: 'kushwah'};
var person2 = { firstName: 'amit', lastName: 'kushwah'};
var person3 = { firstName: 'aryan', lastName: 'kushwah'};

function getName(message, city) {
    return message + ' to ' + city + ' ' + this.firstName + ' ' + this.lastName;
}

var output = getName.bind(person1, 'Welcome', 'Noida');

var output1 = getName.call(person2, 'Welcome', 'noida');

var output2 = getName.apply(person3, ['Welcome', 'noida']);

console.log(output());

console.log(output1)

console.log(output2)

function sayHello() {
    console.log(this)
}

var output1 = sayHello.call(person1)
var output2 = sayHello.call(person2)

// console.log(output1, output2)

var obj = {
    name: 'sumit kushwah',
    log: function() {
        console.log(this);
        function updateName() {
            this.name = 'amit kushwah';
            console.log(this);
        }

        updateName.bind(this)();
    }
}

console.log(obj.log())