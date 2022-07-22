// reduce 
const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000


//demo test

const numberSum = [3,54,6.56,35,63];

const sumOfNumber = numberSum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sumOfNumber);

const products = [
    {producId: 1001, productName: "Iphone 13 pro max", productPrice: 80000},
    {producId: 1002, productName: "Iphone 12 pro max", productPrice: 60000},
    {producId: 1003, productName: "Iphone 11 pro", productPrice: 50000},
    {producId: 1004, productName: "Iphone 13 pro max", productPrice: 40000},
    {producId: 1005, productName: "Iphone 13 pro max", productPrice: 80000},
    {producId: 1006, productName: "Iphone 13 pro max", productPrice: 80000},
    {producId: 1007, productName: "Samsung Galaxy", productPrice: 50000},
    {producId: 1008, productName: "Iphone 13 pro max", productPrice: 60000},
    {producId: 1009, productName: "Iphone 12 pro max", productPrice: 70000},
    {producId: 1010, productName: "Iphone 11 pro max", productPrice: 80000},
    {producId: 1011, productName: "Iphone 10 pro max", productPrice: 90000}
];

const total = products.reduce((totalPrice, currentPrice) => {
    return totalPrice + currentPrice.productPrice;
}, 0);

console.log(total);