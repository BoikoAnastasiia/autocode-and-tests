const validateTitle = value => {
  let message = 'INVALID';
  if (typeof value !== 'string') {
    message = 'Incorrect input data';
  }
  if (
    value.length > 2 &&
    value.length < 30 &&
    value[0] === value[0].toUpperCase() &&
    isNaN(value[0])
  ) {
    message = 'VALID';
  }

  return message;
};

// console.log(validateTitle('12title!')); // 'Incorrect input data'
// validateTitle([]); // 'Incorrect input data'
// validateTitle('s'); // 'INVALID
// validateTitle('12title'); // 'INVALID'
// validateTitle('Title!'); // 'VALID'
// validateTitle('Title?'); // 'VALID'

const sum = (value1, value2) => {
  // Student implementation
  return;
};

// Write a title validation function called “validateTitle”, that takes an argument and validates it by the rules:

// Title length must be more than 2 characters but less than 20.
// Title must start with an uppercase letter.
// Function should return ‘VALID’ if the string meets the requirements or ‘INVALID’ if it does not.And return 'Incorrect input data' if the given argument not a string.Do not use regular expressions.

// TASK № 2

// Create a function called “sum”, that takes two arguments: a number, represented as string, and a number. If an argument of type number is divisible by 3, 5 and 15 without remainder, multiply it by -1. Function should return numeric sum of two arguments.
