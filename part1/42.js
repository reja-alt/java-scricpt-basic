//objects inside array

const users = [
    { userId: 1, firstName: "reja", lastName: "khan", email: "reja02@gmail.com"},
    { userId: 2, firstName: "ranbir", lastName: "khan", email: "ranbir2@gmail.com"},
    { userId: 3, firstName: "rithom", lastName: "rahman", email: "rithom@gmail.com"},
    { userId: 4, firstName: "rigan", lastName: "khan", email: "rigan@gmail.com"},
];

for(let element of users) {
    console.log(`Element Id : ${element["userId"]}`);
    console.log(`Element Email : ${element["email"]}`);
    console.log(`Element firstName : ${element["firstName"]}`);
    console.log(`Element lastName : ${element["lastName"]}`);
}
console.log(users);

// const [user1, user2, user3] = users;
const [{email: emailf1, firstName:userf1}, {lastName}, {lastName:userf3}] = users;
// const [user1, ...user3] = users;
console.log(users);
console.log(emailf1);
console.log(userf3);
console.log(userf1);