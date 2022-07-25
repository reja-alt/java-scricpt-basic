//rest parameteres
 
function addNumber(a, b, ...newArray) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`new array is ${newArray}`);
}

addNumber(34,54,53,4,645, 56,645);

function createArray(...array) {
    let total = 0;
    for(let item of array) {
        total = total + item;
    }
    console.log(total);
}

createArray(5,5,667,43,56,67,34);