// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);


//array concat
// let fruits = ["apple", "banana", "orange"];
// let flowers = ["rose", "belly"];

// let arrayConnect = fruits.concat(flowers);
// console.log(arrayConnect);


//demo test

let num1 = 78;
let num2 = num1;

num1 = 78 + 56;
console.log(num1);
console.log(num2);

let array11 = [34,56,433,445];
let array12 = array11;      //store array as pointer on stock and value on heap

array11.push('new data', 'more data');
console.log(array11);
console.log(array12);
