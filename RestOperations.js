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

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3));

const newArray = (...args) => {
    return args;
};

console.log(newArray(1,2,3,4,5,6));