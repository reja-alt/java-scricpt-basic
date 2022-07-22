//map method

const numbers = [43,6,43.6,43];

// const value = function getValue(number) {
//     return number * number;
// }

const newArray = numbers.map((number, item, val, param) => {
    return ` number is ${number * number} , index is ${item}, value is  ${val}, default is ${param}`;
});
console.log(newArray);