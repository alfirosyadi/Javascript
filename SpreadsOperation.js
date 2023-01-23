const person = {
    name: 'Alfi',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Hiking'];
const copiedArray = [...hobbies];
console.log(copiedArray);