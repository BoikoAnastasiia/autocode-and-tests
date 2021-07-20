//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = func => {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
};

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = () => {
  let step = 0;
  function forward() {}
  function backward() {}
  function revealStep() {}
};

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = () => {
  // Do your magic here
};
const sum = () => {
  // Do your magic here
};

const mul = () => {
  // Do your magic here
};

//=============================================
