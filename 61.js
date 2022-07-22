//find method

let fruits = ["banana", "mango", "orange", "pine apple"];

// function isLength5(item) {
//     return item.length === 10;
// }

const ans = fruits.find(string => {
    return string.length === 10
});

console.log(ans);

const users = [
    {userId: 1, userName: "reja", age: 28},
    {userId: 2, userName: "asif", age: 25},
    {userId: 3, userName: "ratul", age: 29},
    {userId: 4, userName: "afnan", age: 23},
    {userId: 5, userName: "adnan", age: 27},
    {userId: 6, userName: "mridul", age: 38},
    {userId: 7, userName: "noman", age: 28},
    {userId: 8, userName: "rakib", age: 30},
    {userId: 9, userName: "jisan", age: 24},
    {userId: 10, userName: "hasan", age: 27},
];

const res = users.find(user => user.userId === 7);
console.log(res);
console.log(res.userName);