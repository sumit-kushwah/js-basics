// using bind
var emp = {
    id: 1,
    greet: () => {
        console.log(this)
    }
}

emp.greet()