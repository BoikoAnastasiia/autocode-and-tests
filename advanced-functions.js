//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = fun => {
  let cache = {};
  return function (n) {
    if (cache[n] != undefined) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
  step: 0,
  forward() {
    this.step++;
    return this;
  },
  backward() {
    this.step--;
    return this;
  },
  revealStep() {
    console.log(this.step);
  },
};

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = (func, ...args) => {
  return func(...args);
};

const sum = (...args) => {
  return args.reduce((acc, value) => acc + value);
};

const mul = (...args) => {
  return args.reduce((acc, value) => acc * value);
};

console.log(mul(3, 5, 7));

//=============================================
console.log(applyAll(mul, 1, 2, 3));
