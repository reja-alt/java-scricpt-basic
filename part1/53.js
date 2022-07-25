//param distructuring

const person = {
    firstName: "reja",
    age: 28,
    gender: "male"
};

function personDetails({age, gender}) {
    // console.log(obj.firstName);
    console.log(age);
    console.log(gender);
}

personDetails(person);