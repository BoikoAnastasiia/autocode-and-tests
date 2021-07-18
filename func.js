const getSum = (str1, str2) => {
  const proofOfNumberInString = str => {
    return str.split('').every(el => !isNaN(+el));
  };

  if (
    typeof str1 === 'string' &&
    typeof str2 === 'string' &&
    proofOfNumberInString(str1) &&
    proofOfNumberInString(str2)
  ) {
    if (str1 === '') {
      str1 = 0;
    }
    if (str2 === '') {
      str2 = 0;
    }

    if (str1.length > str2.length) {
      let temp = str1;
      str1 = str2;
      str2 = temp;
    }

    let str = '';

    let n1 = str1.length,
      n2 = str2.length;

    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');

    let carry = 0;
    for (let i = 0; i < n1; i++) {
      let sum =
        str1[i].charCodeAt(0) -
        '0'.charCodeAt(0) +
        (str2[i].charCodeAt(0) - '0'.charCodeAt(0)) +
        carry;
      str += String.fromCharCode((sum % 10) + '0'.charCodeAt(0));

      carry = Math.floor(sum / 10);
    }

    for (let i = n1; i < n2; i++) {
      let sum = str2[i].charCodeAt(0) - '0'.charCodeAt(0) + carry;
      str += String.fromCharCode((sum % 10) + '0'.charCodeAt(0));
      carry = Math.floor(sum / 10);
    }

    if (carry > 0) str += String.fromCharCode(carry + '0'.charCodeAt(0));

    str = str.split('').reverse().join('');
    return str;
  }

  return false;
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  // add your implementation below
  return;
};

const tickets = people => {
  let quarter = people.filter(el => el == 25).length;
  let pineapple = people.filter(el => el == 50).length;
};

// console.log(tickets([25, 25, 50]));
// tickets([25, 25, 50]); // => 'YES'
// tickets([25, 100]); // => 'NO'
// tickets([25, 25, 50, 100]); // 'YES'
// tickets([25, 50, 100]); // 'NO'
// tickets(['25', '25', '50', '100']); // 'YES'
// tickets(['25', '50', '100']); // 'NO'

// TASK № 1

// The new "How to Train Your Dragon” movie has just been released!  There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Batman v Superman: Dawn of Justice" ticket costs 25 dollars. Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line. Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line? Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO. Can Vasya sell a ticket to each person and give the change?
// Conditions:

// @param persons queue Array

// @return String

// function tickets(person) {
// //Your code here
// }

// For example:
// //Examples:
// tickets([25, 25, 50]); // => 'YES'
// tickets([25, 100]);    // => 'NO'
// tickets([25, 25, 50, 100]); // 'YES'
// tickets([25, 50, 100]); // 'NO'
// tickets([‘25’, ‘25’, ‘50’, ‘100’]); // 'YES'
// tickets([‘25’, ‘50’, ‘100’]); // 'NO'

// TASK № 2

// Write a function that gets two infinite numbers as strings. You should return the result of these two numbers sum as string.

// If your arguments are not strings of number your function should return false

// If your arguments are objects,arrays,numbers or not a string that contains only numbers, your function should return false

// If your argument is an empty string '' it should be converted into 0

// For example:
// getSum({}, [])  ->  false
// getSum(‘123maxim’, ‘3coding24’)  ->  fasle
// getSum(‘’, ‘4444’)  ->  '4444'
// getSum(‘123’, ‘324’)  ->  ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,        ’23333333333333333333333333333333333333333333333333’)
// -> ‘3444444.......4444444’

// TASK № 3

// Create function that gets two arguments: the first one is array of objects, the second one is string (name of author)

// Your function should return quantity of posts with author from argument of function and the quantity of all comments with the same author. Example of array:

// For example:
// function getQuntityPostsByAuthor (listOfPosts1, 'Rimus') {
// // your code
// }

// Your result should be a string like this :  'Post:1,comments:3'  ,
// If there aren’t post or comments your result will be a string like this 'Post:0,comments:0'
// let listOfPosts2 = [
// {
//     id: 1,
//     post: 'some post1',
//     title: 'title 1',
//     author: 'Ivanov',
//     comments: [
//         {
//             id: 1.1,
//             comment: 'some comment1',
//             title: 'title 1',
//             author: 'Rimus'
//         },
//         {
//             id: 1.2,
//             comment: 'some comment2',
//             title: 'title 2',
//             author: 'Uncle'
//         }
//     ]
// },
// {
//     id: 2,
//     post: 'some post2',
//     title: 'title 2',
//     author: 'Ivanov',
//     comments: [
//         {
//             id: 1.1,
//             comment: 'some comment1',
//             title: 'title 1',
//             author: 'Rimus'
//         },
//         {
//             id: 1.2,
//             comment: 'some comment2',
//             title: 'title 2',
//             author: 'Uncle'
//         },
//         {
//             id: 1.3,
//             comment: 'some comment3',
//             title: 'title 3',
//             author: 'Rimus'
//         }
//     ]
// },
// {
//     id: 3,
//     post: 'some post3',
//     title: 'title 3',
//     author: 'Rimus'
// },
// {
//     id: 4,
//     post: 'some post4',
//     title: 'title 4',
//     author: 'Uncle'
// }

// ]
