const findVowels = str => {
  let message = 'Passed argument is not a string';
  if (!str) {
    message = 'String is empty';
    return message;
  }

  if (typeof str === 'string' || str instanceof String) {
    const isThereAVowels = str.match(/[aeiou]/gi);

    isThereAVowels
      ? (message = isThereAVowels.length)
      : (message = 'String does not contain vowels');
  }

  return message;
};

console.log(findVowels([]));
// - findVowels('rweqqwrAAAA') // 5
// - findVowels('TRDDDFTRKKLLLPNM') // 'String does not contain vowels'
// - findVowels('') // 'String is empty'
// - findVowels([]) // 'Passed argument is not a string'
