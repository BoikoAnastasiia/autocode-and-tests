const obj = {
  viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
  kate: ['grape', 'orange', 'apple', 'grape', 'banana'],
};
function calc(obj) {
  const arrays = Object.values(obj);
  const names = Object.keys(obj);

  const firstAr = [2, 1, 1, 1];
  const secondAr = [1, 2, 1, 1];

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
