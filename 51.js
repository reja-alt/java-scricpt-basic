//default parameters

function addNumbers(a, b = 1) {
    return a + b;
}

const res = addNumbers(6, 45);
console.log(res);