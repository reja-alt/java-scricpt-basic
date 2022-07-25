//sets

const numbers = new Set();
const numbersOnly = new Set([32,545,65]);

numbers.add(32);
numbers.add(5);
numbers.add(8);
numbers.add(87);
numbers.add(82);

const fruits = ['apple', 'mango', 'pine apple'];
const object = { key1: "value1", key2: "value2"};

numbers.add("demo");
numbers.add(fruits);
numbers.add(object);

if(numbers.has(object)) {
    console.log('exists');
} else {
    console.log('not exists');
}
numbers.add(fruits);
console.log(numbers);
console.log(numbers[2]);

for(let item of numbers) {
    console.log(item);
}