// array push pop 

// array shift unshift 

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// push 
// fruits.push("banana");
// console.log(fruits);
// pop 
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift 
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift 
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

//demo test

let fruitsList = ["apple", "mango", "grapes"];

console.log(fruitsList);

fruitsList.push("banana");

console.log(fruitsList);

let poppedFruits = fruitsList.pop();  //Remove the last element
console.log("Popped fruits is : " + poppedFruits);

//Unshift 
fruitsList.unshift("pine Apple");   //Add element to start index
console.log(fruitsList);

let shiftedFruitts = fruitsList.shift()   //Remove element from first index
console.log("Shifted fruit is : " + shiftedFruitts);

