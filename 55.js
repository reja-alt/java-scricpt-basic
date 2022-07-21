//function returning function 

function test() {
    function addNmber() {
        console.log("add number");
    }
    return addNmber;
}

const ans = test();
// console.log(test());
ans();
