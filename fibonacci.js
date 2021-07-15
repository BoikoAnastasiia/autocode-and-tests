// const fibonacciNumbers = num => {
//   if (!isNaN(num)) {
//     if (num < 2) {
//       return num;
//     } else {
//       return fibonacciNumbers(num - 1) + fibonacciNumbers(num - 2);
//     }
//   }

//   return 'Passed argument is not a number';
// };

const fibonacciNumbers = num => {
  if (Number.isInteger(num)) {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
      const prev = result[i - 1];
      const prev2 = result[i - 2];
      result.push(prev + prev2);
    }
    return result[num];
  }
  return 'Passed argument is not a number';
};

// const fibonacciNumbers = num => {
//   let a = 1,
//     b = 1;
//   for (let i = 3; i <= num; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// };

console.log(fibonacciNumbers(6));

return Number.isInteger(num)
  ? num <= 1
    ? num
    : fibonacciNumbers(num - 1) + fibonacciNumbers(num - 2)
  : 'Passed argument is not a number';
