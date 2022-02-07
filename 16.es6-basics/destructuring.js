// array destructing

let array = ['sumit', 'amit', 'aryan']

let [firstName, secondName, thirdName] = array


// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)
// array[0] = 'aman'
// console.log(firstName)
// console.log(array)

let names = ['amit', 'sumit', 'aman']

let [fname, sname, tname] = names;

// console.log(fname, sname, tname)

let fullname = 'sumit kushwah'

let [firstname, secondname] = fullname.split(' ')

// console.log(firstname, secondname)

// console.log(' '.join(fullname.split()))

let user = {
    name: 'sumit',
    age: 22
}

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key} ${value}`)
// }

let options = {
    title: 'Menu',
    width: 100,
    height: 200
}

let { width, title, height } = options;

console.log(title, width, height);


