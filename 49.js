//lexical scope
const spaceTest = 'some text';

const myApp = (array) => {

    function lexScope() {
        const spaceTest = 'dont make a noise';
        const diff = () => {
            const spaceTest = 'noise';
            console.log(spaceTest);
        }
        diff();
    }

    const checkNumber = () => {
        console.log('check number');
        return num1 + num2;
    }

    const demo = function() {
        var numCheck = 'try to get it';
        console.log(numCheck);
    }

    console.log(spaceTest);

    lexScope();
    demo();

    const checkArray = Array.isArray(array);
    console.log(typeof array);

}

const array = [543,765,65];
myApp(array);