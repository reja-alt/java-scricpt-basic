// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }

let winningNumber = 46;
let guessNumber = +prompt("Guess a number");

if(guessNumber === winningNumber) {
    console.log("You are right");
} else {
    if(guessNumber < 46) {
        if(guessNumber < 20) {
            console.log('You are very low');
        }
        else {
            console.log('You are too low');
        }
    } else {
            if(guessNumber > 80) {
                console.log('You are very high');
            }
            else {
                console.log('You are too high');
            }
    }
}