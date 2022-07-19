// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
console.log(fruits2);

//demo test

const vegetables = ['potato', 'tomato', 'ladies finger'];
let i = 0 ;
let newArray = [];

// while(i < vegetables.length) {
//     newArray.push(vegetables[i].toUpperCase());
//     i++;
// }

// console.log(newArray);

// for(let fruit of fruits) {
//     console.log(fruit);
// }

for(let index in vegetables) {
    console.log(index);
}