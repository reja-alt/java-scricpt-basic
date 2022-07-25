//demo test

const key1 = "object1";
const key2 = "object2";

const value1 = "element1";
const value2 = "element2";

const obj = {
    [key1]: value1,
    [key2]: value2
}

const newObj = {};

newObj[key1] = value1;
newObj[key2] = value2;

console.log(obj);
console.log(newObj);