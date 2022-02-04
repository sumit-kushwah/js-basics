try {
    // code that may or may not throw errors
} catch {
    // code to be executed if errors occurs
} finally {
    // code to be executed regardless of error
}

try {
    var output = getMessage('Hello')
    function Student() {

    }
    var student = new Student();
    // student.name = 'sumit'
} catch(ex) {
    console.log(ex.name)
    console.log(ex.message)
    console.log(ex.description)
} finally {
    // we do code cleanup here
    student = null; // cleaning this
    // delete student;
    console.log(student)
    console.log('Mujhe koi nhi rok skta')
}

try {
    var count = 2;
    if (count > 2) {
        throw {
            number: 101,
            message: 'Duplicate Student Record Found',
        }
    }

} catch(ex) {
    console.log(ex)
}