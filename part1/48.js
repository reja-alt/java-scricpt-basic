//function inside function

const app = () => {
    const welcomeMsg = () =>{
        console.log('welcome');
    }

    const addNumbers = (val1, val2) => {
        return val1 + val2;
    }

    const multi = (num1, num2) => num1 * num2;

    console.log('inside a app');
    welcomeMsg();
    console.log(addNumbers(74,893));
    console.log(multi(74,893));
}

app();