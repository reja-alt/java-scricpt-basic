// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing 

//demo test

let fruitsCollection = Array("apple", "mango", "orange", "grapes");
let numberCollection = [3,4,56,54];
let mixedCollection = [3,4,56,54, "rose", "tulip", null, undefined, "", Array(2,7,6,3)];

console.log(fruitsCollection);
console.log(fruitsCollection[2]);
console.log(numberCollection);
console.log(mixedCollection);

mixedCollection[4] = 'change value';
console.log(mixedCollection);

console.log(typeof mixedCollection);
obj = {};
console.log(typeof obj);

console.log(Array.isArray(fruitsCollection));
console.log(Array.isArray(obj));