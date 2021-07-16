const snakeArray = snakeStart => {
  return [
    [1, 2, 3, 4, 5, 6, 7],
    [22, 23, 24, 25, 26, 27, 8],
    [21, 36, 37, 38, 39, 28, 9],
    [20, 35, 42, 41, 40, 29, 10],
    [19, 34, 33, 32, 31, 30, 11],
    [18, 17, 16, 15, 14, 13, 12],
  ].map(row => row.map(val => val + snakeStart - 1));
};

console.log(snakeArray(-10));
// ## Snake array

// ### Create a function that takes a number(it can be any number) and produces a spiral matrix (two-dimensional array) with 7 columns and 6 rows where the start is the number you passed in as an argument. See images below for the pattern. In the first example snakeArray(1) was called. The second one snakeArray(-10).
