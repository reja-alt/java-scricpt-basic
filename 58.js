//filter method

const numbers = [23,4,43,54,32,33,48,32,76,49];

// const isEven = function(number) {
//     return number % 2 === 0;
// }

const res = numbers.filter((number, index) => {
    // return number % 2 !== 0;
    return number;
});

console.log(res);