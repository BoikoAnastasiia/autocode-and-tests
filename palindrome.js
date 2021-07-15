const detectPalindrome = str => {
  let message = 'Passed argument is not a string';
  if (!str) {
    message = 'String is empty';
    return message;
  }
  if (typeof str === 'string' || str instanceof String) {
    const ar = str.toLocaleLowerCase().split('');
    let middle;
    str.length % 2 === 0
      ? (middle = ar.length / 2)
      : (middle = (ar.length - 1) / 2);
    const first = ar.slice(0, middle);
    let second;
    middle % 2 === 0
      ? (second = ar.slice(middle, ar.length).reverse())
      : (second = ar.slice(middle + 1, ar.length).reverse());
    if (first.join() == second.join()) {
      message = 'This string is palindrome!';
      return message;
    }
    message = 'This string is not a palindrome!';
  }
  return message;
};
console.log(detectPalindrome('Огоміннімого'));
// detectPalindrom(true) - // "Passed argument is not a string"
//   detectPalindrom('') - // "String is empty"
//   detectPalindrom('TARARAT') - // 'This string is palindrome!'
//   detectPalindrom('I can fly ylf nac i') - // 'This string is palindrome!'
//   detectPalindrom('testtest'); // 'This string is not a palindrome!'

// if (typeof str === 'string' && str !== '') {
//   return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
//     ? 'This string is palindrome!'
//     : 'This string is not a palindrome!';
// } else if (str === '') {
//   return 'String is empty';
// } else {
//   return 'Passed argument is not a string';
// }
