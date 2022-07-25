// template string 
let age = 22;
let firstName = "harshit"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);

let email = "reja6402@gmail.com";
let address = "jatrabari,dhaka";
let userAge = 28;

let profile = "My email: " + email + "\n" + "Address: " + address +  "\n" + "My Age: " + userAge;
let profile2 = `My email: ${email} \n Address: ${address} \n My Age: ${age}`;

console.log(profile);
console.log(profile2);