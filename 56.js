//array methods

const array = [54,65,76,32];

// function myFunction(number, index) {
//     console.log(`index is ${index} number is ${number}`)
// }

// for(let i = 0; i < array.length; i++) {
//     myFunction(array[i], i)
// }

// array.forEach(myFunction);
array.forEach(function(number, index) {
    console.log(number * 3, index);
});

const users = [
    {firstName: "reja", age: 28},
    {firstName: "asif", age: 32},
    {firstName: "rinkon", age: 34}
];

//map method
const newUser = users.map((item, index) => {
    return item.age;
});

console.log(newUser);

// console.log(users);
users.forEach(function(value, index) {
    console.log(value.age);
});
users.forEach((value, index) => {
    console.log(value.age, index);
});