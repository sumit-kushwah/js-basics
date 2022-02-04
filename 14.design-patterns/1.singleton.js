// function Student() {
//     console.log('Student Object is Created')
// }
//
// var s1 = new Student()
// var s2 = new Student()
// var s3 = new Student()
// var s4 = new Student()
//
//
// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s4)

var Student = (function () {
    var instance = null;
    var createInstance = function () {
        var obj = Object.create(null);
        console.log('object is created');
        return obj;
    }
    var getInstance = function () {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }
    return { create: getInstance };
} ) ()
// console.log(typeof Singleton)

var s1 = Student.create()
var s2 = Student.create()
var s3 = Student.create()
var s4 = Student.create()

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)


