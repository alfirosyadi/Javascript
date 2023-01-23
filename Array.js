const person = {
    name: 'Alfi',
    age: 24,
    greet() {
        console.log('Hi I am '+ this.name);
    }
};

const hobbies = ['sports', 'hiking'];
// for(let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby:' + hobby));
console.log(hobbies);