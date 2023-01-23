const person = {
    name: 'Alfi',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// Ini cara biasa
// const printName = (persondata) => {
//     console.log(persondata.name);
// };

// Ini menggunakan metode destrcturing object
const printName = ({name}) => {
    console.log(name);
};

const { name, age } = person;
console.log(name,age);

printName(person);