const name = "Alfi";
let age = 24;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    this
    return(`Name is ${userName}, age ${userAge}, and the user has hobbies ${userHasHobby}`);
};

//This actual function of arrow function
/*
const summarizeUser = function summarizeUser(userName, userAge, userHasHobby) {
    return (
        `Name is ${userName}, age is ${userAge},and the user has hobbies ${userHasHobby}`);
};
*/

console.log(summarizeUser(name, age, hasHobbies));

const add = (a,b) => a+b;

console.log(add(1,2));