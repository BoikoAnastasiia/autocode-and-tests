const evenNumbersInArray = array => {
  let result;
  if (Array.isArray(array)) {
    result = array.filter(el => el % 2 === 0);

    if (result.length === 0) {
      result = 'Passed array does not contain even numbers';
    }
  }

  if (!Array.isArray(array) || array.length === 0) {
    result = 'Passed argument is not an array or empty';
  }
  return result;
};

console.log(evenNumbersInArray([]));

// console.log([1, 2, 3, 4, 5, 6].filter(el => el % 2 === 0));
