// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)


//demo test

let array11 = ["item1", "item2"];
let array12 = array11;
array11.push("item3");

console.log(array11 === array12);

let array21 = ["item1", "item2"];
// let array22 = [...array21].concat(["item3", "item4"]);

let oneMoreArray1 = ["element1", "element2"];
let array22 = [...array21, ...oneMoreArray1];
array21.push("item3");

console.log(array21 === array22);
console.log(array21);
console.log(array22);