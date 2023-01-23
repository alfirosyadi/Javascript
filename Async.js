const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done');
    }, 1500);
};

//Async function
setTimeout(() => {
    console.log('Timer is Done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);
//

console.log('Hello!');
console.log('Hi!');