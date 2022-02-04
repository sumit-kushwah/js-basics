'use strict'

function Shape() {

}

Shape.prototype.draw = function () {
    return 'This is a generic shape';
}

// Circle

function Circle() {

}

Circle.prototype = new Shape()

Circle.prototype.draw = function() {
    return 'I am circle';
}

// Square

function Square() {

}

Square.prototype = new Shape()

Square.prototype.draw = function() {
    return 'I am square';
}

// Triangle

function Trianlge() {

}

Trianlge.prototype = new Shape()

Trianlge.prototype.draw = function() {
    return 'I am triangle';
}

// var shape = new Shape()
// console.log(shape.draw())
//
// var circle = new Circle()
// console.log(circle.draw())
//
// var square = new Square()
// console.log(square.draw())
//
// var triangle = new Trianlge()
// console.log(triangle.draw())

var shapes = [
    new Shape(),
    new Circle(),
    new Square(),
    new Trianlge()
];

shapes.forEach(function(shape) {
    console.log(shape.draw())
})
