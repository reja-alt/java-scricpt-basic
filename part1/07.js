// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let subject = "chemistry";
console.log(subject.length);


let trimsSubject = subject.trim();
console.log(trimsSubject.length);


console.log(subject.slice(4,6));

let firstName = "harshit";

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // hars
console.log(newString);

//demo test
let subject1 = "physics";
let value = subject1.slice(1,3);
console.log(value);
