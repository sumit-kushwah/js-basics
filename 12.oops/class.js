// class
function Student() {

}

// Intances
function Person() {

}

// objects
var person1 = new Person()
var person2 = new Person()

// constructor
function Order() {
    console.log('Order is initiated')
}

var order = new Order() // Order() is contructor;

// properties

function Customer(gender) {
    this.gender = gender;
}

var customer1 = new Customer('Male');

console.log(customer1);

var customer2 = new Customer('Female');

console.log(customer2);
