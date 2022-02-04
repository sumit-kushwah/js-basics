var people =["Scott","Adam", "Tuan"]

for(var i=0; i<people.length;i++){
    console.log(people[i])
}

var names1 = people.forEach((name, index) => {
    return name;
});

console.log(names1);

var names2 = people.map((name, index) => {
    return { name, index };
});

console.log(names2);

for (var name in people) {
    console.log('In demo: ' + name);
}

for (var name of people) {
    console.log('Of demo:' + ' ' + name);
}

// getting index and value together

for (var [index, value] of people.entries()) {
    console.log("IndexValue: "  + index + ' ' + value);
}