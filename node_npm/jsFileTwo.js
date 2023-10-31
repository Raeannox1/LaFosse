//* OBJECT DOT NOTATION
// const object = require('./jsFileOne.js');

// console.log(object.add(1,2));
// console.log(object.anotherFunction(1,2,3));

//* OBJECT DESTRUCTION
const {add, anotherFunction} = require('./jsFileOne.js');

console.log(add(1,2));
console.log(anotherFunction(1,2,3));

