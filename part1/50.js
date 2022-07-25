// block scope vs function scope 


// let and const are block scope
// var is function scope 

{
    var simple = "This is a block one";
}

{
    var simple1 = "This is a inner block";
    console.log(simple);
}
console.log(simple1);

function myApp() {
    // if(true) {
    //     var firstName  = "reja khan";
    //     console.log(firstName);
    // }
    // console.log(firstName);

    function checkIt() {
        let i = 0;
        let result = [];

        while(i < 9) {
            result.push(i);
            i++;
        }

        console.log(result);
    }

    checkIt();
}

myApp();