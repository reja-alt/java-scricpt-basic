//callback function

// function getValue(value) {
//     console.log(value);
// }

// getValue({name: "reja", age: 27, gender: "male"});
function test(name) {
    console.log(`Your name is ${name}`);
    console.log("Callback function is called");
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function getValue(value, result) {
    test();
    test("reja");
    console.log(addNumbers(46, 57)) ;
    // console.log(value);

    // console.log(result);
}

getValue(test, addNumbers);