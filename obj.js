const obj = {
  viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
  kate: ['grape', 'orange', 'apple', 'grape', 'banana'],
};
function calc(obj) {
  const arrays = Object.values(obj);
  const names = Object.keys(obj);

  const firstObj = Object.fromEntries(
    arrays[0].map((_, i) => [arrays[0][i], firstAr[i]])
  );
  const secondtObj = Object.fromEntries(
    arrays[1].map((_, i) => [arrays[1][i], secondAr[i]])
  );
  const result = {};
  result[names[0]] = firstObj;
  result[names[1]] = secondtObj;

  return result;
}
console.log(calc(obj));
//result of calc method should be equal to
// {
//     viktor: {
//         apple: 2,
//         grape: 1,
//         orange: 1,
//         banana: 1,
//     },
//     kate: {
//         apple: 1,
//         grape: 2,
//         orange: 1,
//         banana: 1,
//     },
// }

console.log(obj.values);

function calc({ ...arg }) {
  const result = {};
  function res(arg) {
    const key = Object.keys(arg);
    result[key[0]] = {};
    function rec(arg, key) {
      if (arg[key[0]] && arg[key[0]].includes(arg[key[0]][0])) {
        result[key[0]].hasOwnProperty(arg[key[0]][0])
          ? (result[key[0]][arg[key[0]][0]] += 1)
          : (result[key[0]][arg[key[0]][0]] = 1);
        arg[key[0]].shift();
        rec(arg, key);
      } else if (arg.hasOwnProperty(key[0])) {
        delete arg[key[0]];
        key.shift();
        arg.hasOwnProperty(key[0]) ? (result[key[0]] = {}) : null;
        rec(arg, key);
      }
    }
    rec(arg, key);
  }
  res(arg);
  return result;
}

function calc(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  const result = keys.reduce((acc, name, index, array) => {
    acc[name] = {};

    values[index].forEach(fruit => {
      acc[name][fruit] = !acc[name][fruit] ? 1 : acc[name][fruit] + 1;
    });

    return acc;
  }, {});

  return result;
}

function calc(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key].reduce((acc, key) => {
      acc[key] = acc[key] ? acc[key] + 1 : 1;
      return acc;
    }, {});
    return acc;
  }, {});
}
