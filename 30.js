// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);


//demo test

let animals = ['tiger', 'cat', 'dog', 'elephant'];

let newArray = [];
for(i= 0; i < animals.length; i++) {
   newArray.push(animals[i].toUpperCase());
}

console.log(newArray);