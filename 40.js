//spread operator

let array1 = [345,66,32,76];
let array2 = [3435,660,362,6];

let newArray = [];

newArray.push(...array1, ...array2, 45);

const arrayS = [..."hfjsdf"];
const arrayN = [..."78745384"];

console.log(newArray);
console.log(arrayS);
console.log(arrayN);

//spread operator in object

const obj1 = {
    key1: "element1",
    key2: "element2"
};

const obj2 = {
    key3: "element3",
    key4: "element4"
};

const newObject = {...obj1, ...obj2, key5: "element5"};
console.log(newObject);

const newString = {..."hfjsfgfs"};
console.log(newString);