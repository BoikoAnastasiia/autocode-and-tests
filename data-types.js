function convert(str) {
  return [...arguments].map(el => {
    if (typeof el === 'string') {
      return +el;
    }
    return el + '';
  });
}

const executeforEach = (array, func) => {
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
  return;
};

const mapArray = (arr, func) => {
  let newAr = [];
  executeforEach(arr, el => newAr.push(func(+el)));

  return newAr;
};

const filterArray = (arr, func) => {
  let newAr = [];
  executeforEach(arr, el => {
    if (func(el)) {
      newAr.push(el);
    }
  });

  return newAr;
};

const flipOver = str => {
  return str.split('').reverse().join('');
};

const makeListFromRange = array => {
  let max = Math.max(...array);
  let min = Math.min(...array);
  return [min, max];
};

const getArrayOfKeys = (array, name) => {
  return array.map(el => el[name]);
};
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 },
];

const substitute = ar =>
  ar.map(el => {
    if (el < 30) {
      el = '*';
      return el;
    }
    return el;
  });

const getPastDay = (date, pastdays) => {
  // Student implementation
  return;
};
const date = new Date(2019, 0, 2);
// console.log(getPastDay(date, 2));

const formatDate = () => {
  // Student implementation
  return;
};

// TASK № 1

// Write a function called “convert”, that converts the argument’s data-type. If the argument is a string, convert it to a number and vice versa. It should return an array of converted values.

// For example:
// convert('1', 2, 3, '4') // [1, '2', '3', 4]
// convert(5, 6, 23, '66') // ['5, '6', '23', 66]

// TASK № 2

// Write a function called “executeforEach”, that iterates over the array and executes a function on each element.

// For example:
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6

// TASK № 3

// Write a function called “mapArray”, that returns a transformed array based on the function, which was passed as a second parameter (callback). If the array contains elements of a string type, they should be converted to a number type. You’re allowed to change a body of that callback function if you need. You can reuse the  function from task 2.

// For example:
// mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]

// TASK № 4

// Write a function called “filterArray”, that returns a filtered array based on function, which was passed as a parameter. You can reuse the function from task 2.

// For example:
// filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) // returns [2, 8]

// TASK № 5

// Write a function called “flipOver”, that reverses a string passed into it.

// For example:
// flipOver('hey world') // 'dlrow yeh'

// TASK № 6

// Write a function called “makeListFromRange”, that creates an array from a given range of numbers.

// For example:
// makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// * makeListFromRange([8]) // [8]

// TASK № 7

// Write a function called “getArrayOfKeys”, that accepts an array of objects and one of the object’s key. It should return a new array of values according to the passed key. The function should not change the original array. You can reuse the function from task 2.

// For example:
// const actors = [
//   { name: ‘tommy’, age: 36 },
//   { name: ‘lee’, age: 28 }
// ];

// getArrayOfKeys(actors, ‘name’); // [‘tommy’, ‘lee’]

// TASK № 8

// Write function called “substitute”, that accepts an array of numbers and replaces all numbers lower than 30 with a star("*"). It should return a new array of numbers and "*" instead of numbers lower than 30. You can reuse the function from task 3.

// For example:
// substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

// TASK № 9

// Write a function called “getPastDay”, that returns a day number that was certain amount of days ago from the passed date. It should not change the given source date.

// For example:
// const date = new Date(2019, 0, 2);
// getPastDay(date, 1); // 1, (1 Jan 2019)
// getPastDay(date, 2); // 31, (31 Dec 2018)
// getPastDay(date, 365); // 2, (2 Jan 2018)

// TASK № 10

// Write a function - formatDate, that formats a date in such format "YYYY/MM/dd HH:mm".

// For example:
// formatDate(new Date('6/15/2018 09:15:00')) // "2018/06/15 09:15"
// formatDate(new Date()) // gets current local time in given format("YYYY/MM/dd HH:mm")
