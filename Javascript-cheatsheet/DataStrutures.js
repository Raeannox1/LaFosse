//* ARRAYS
const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array[2]);

//* CHANGE ARRAY ELEMENTS
array[2] = 100;

//* MAP() - ARRAY MAP
const mapArray = [1, 2, 3, 4, 5, 6,];

const mapped = mapArray.map((item) => item * 2);

console.log(mapped); // [2, 4, 6, 8, 10, 12]

//* FILTER() - ARRAY FILTER

const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filtered = filterArray.filter((item) => item % 2 === 0);

console.log(filtered); // [2, 4, 6, 8]

//* SORT() - ARRAY SORT
const sortArray = [1, 9, 3, 4, 5, 6, 7, 8, 2];
//ASCENDING
const sorted = sortArray.sort((a, b) => a > b ? 1 : 1);

console.log(sorted); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//DESCENDING
const sort = sortArray.sort((a, b) => a > b ? -1 : 1);

console.log(sort); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

//* FOREACH() - ARRAY FOREACH

const forEachArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

forEachArray.forEach((item) => console.log(item)); // 1 2 3 4 5 6 7 8 9

//*CONCAT() - ARRAY CONCAT
const concatArray = [1, 2, 3, 4, 5, 6];

const concatArray2 = [7, 8, 9];

const concatArray3 = concatArray.concat(concatArray2);

console.log(concatArray3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//* EVERY() - ARRAY EVERY

const everyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = everyArray.every((item) => item % 2 === 0);

console.log(isEven); // true

//* SOME() - ARRAY SOME

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isOdd = someArray.some((item) => item % 2 === 1);

console.log(isOdd); // true

//* INCLUDE() - ARRAY INCLUDE

const includeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isIncluded = includeArray.includes(5);

console.log(isIncluded); // true

//* JOIN() - ARRAY JOIN

const joinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const joined = joinArray.join('-');

console.log(joined); // 1-2-3-4-5-6-7-8-9

//* REDUCE() - ARRAY REDUCE

const reduceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = reduceArray.reduce((a, b) => a + b);

console.log(sum); // 55

//* FIND() - ARRAY FIND

const findArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const found = findArray.find((item) => item % 2 === 0);

console.log(found); // 2

//* FIND INDEX() - ARRAY FIND INDEX

const findIndexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundIndex = findIndexArray.findIndex((item) => item % 2 === 0);

console.log(foundIndex); // 1

//* INDEXOF() - ARRAY INCLUDE INDEX

const indexOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundIndexs = indexOfArray.indexOf(5);

console.log(foundIndexs); // 4

//* FILL() - ARRAY FILL

const fillArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filled = fillArray.fill(5);

console.log(filled); // [1, 2, 3, 4, 5, 5, 5, 5, 5]

//* SLICE() - ARRAY SLICE

const sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sliced = sliceArray.slice(2, 5);

console.log(sliced); // [3, 4, 5]

//* REVERSE() - ARRAY REVERSE

const reverseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reversed = reverseArray.reverse();

console.log(reversed); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

//* PUSH() - ARRAY PUSH

const pushArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pushed = pushArray.push(10);

console.log(pushed); // 11

//* POP() - ARRAY POP

const popArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const popped = popArray.pop();

console.log(popped); // 9

//* SHIFT() - ARRAY SHIFT

const shiftArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shifted = shiftArray.shift();

console.log(shifted); // 1

//* UNSHIFT() - ARRAY UNSHIFT

const unshiftArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const unshifted = unshiftArray.unshift(10);

console.log(unshifted); // 11

//* COPY() - ARRAY COPY

const copyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const copied = copyArray.copy();

console.log(copied); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//* at() - ARRAY AT: Returns an indexed element of an array
at();

//* COPYWithin() - ARRAY COPYWITHIN: Copies array elements within the array, to and from specified positions
copyWithin()

//* entries() - Array entries: Returns an Array Iteration Object
entries()

//* flat() - ARRAY FLAT: Flattens an array
flat()	Concatenates sub-array elements

//* FLATMAP() - ARRAY FLATMAP: Flattens an array and maps each element to a
flatMap()

//* FROM() - ARRAY FROM: Creates an array from an object
from()

//* INDEXOF() - ARRAY INDEXOF: Returns the index of the first occurrence of a value in
indexOf()

//* ISARRAY() - ARRAY ISARRAY: Checks whether an object is an array
isArray()

//* KEYS() - ARRAY KEYS: Returns an Array Iteration Object, containing the keys of the original array
keys()

//* LASTIndexOf() - ARRAY LASTINDEXOF: Returns the index of the last occurrence of a value
lastIndexOf()

//* REDUCERIGHT() - ARRAY REDUCERIGHT: Reduce the values of an array to a single value (
reduceRight()

//* TOSTRING() - ARRAY TOSTRING: Converts an array to a string, and returns the result
toString()

//* VALUES() - ARRAY VALUES: Returns an Array Iteration Object, containing the primitive values of the original
valueOf()

//* OBJECTS
const obj = {
    name: 'John',
    age: 25,
    city: 'New York',
    country: 'USA',
};

console.log(obj.name); // John

