//6 kyu
//Duplicate Encoder

//The goal of this exercise is to convert a string to a new string where each 
//character in the new string is "(" if that character appears only once in the original string, 
//or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.

//1 solution:
//function duplicateEncode(word){
//  word = word.toLowerCase().split('')    
//  let code = []
//  for (let i = 0; i < word.length; i++) {
//    if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
//      code.push('(') 
//    } else code.push(')')
//  }
//  return code.join('')
//}
//console.log(duplicateEncode("Success"))

//2 solution:
//function duplicateEncode(word){
//  return word
//    .toLowerCase()
//    .split('')
//    .map( function (v, i, arr) {
//      return arr.indexOf(v) == arr.lastIndexOf(v) ? '(' : ')'
//    })
//    .join('');
//}
//console.log(duplicateEncode("Success"))

//3 solution:
//function duplicateEncode(word) {
//  word = word.toLowerCase();
//  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
//}
//console.log(duplicateEncode("Success"))
//------------------------------------------

//6 kyu
//N-th Fibonacci

//I love Fibonacci numbers in general, but I must admit I love some more than others.
//I would like for you to write me a function that, when given a number n (n >= 1 ), 
//returns the nth number in the Fibonacci Sequence.
//For example:
//   nthFibo(4) == 2
//Because 2 is the 4th number in the Fibonacci Sequence.
//For reference, the first two numbers in the Fibonacci sequence are 0 and 1, 
//and each subsequent number is the sum of the previous two.

//1 solution(slow):
//function nthFibo(n) {
// if ( n === 1 ) {
//  return 0
// } else if ( n === 2 ) {
//  return 1
// } else {
//  return nthFibo(n - 2) + nthFibo(n - 1)
// }
//}
//console.log(nthFibo(77))

//2 solution(fast):
//function nthFibo(n) {
//  let a = 0, b = 1;
//  for (let i = 3; i <= n; i++) {
//    let c = a + b;
//    a = b;
//    b = c;
//  }
//  return n == 1? a: b;
//}
//console.log(nthFibo(77))

//3 solution:
//const nthFibo = n =>
//  Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5);
//  console.log(nthFibo(7));

//4 solution:
//function nthFibo(n) {
//  var cache=[0,0,1,1];
//  while(cache.length<=n){
//    cache[cache.length]=cache[cache.length-1]+cache[cache.length-2];
//  }
//  return cache[n];
//}
//console.log(nthFibo(17));
//----------------------------------------------------

//  7 kyu
//Head, Tail, Init and Last

//Haskell has some useful functions for dealing with lists:

//$ ghci
//GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
//λ head [1,2,3,4,5]
//1
//λ tail [1,2,3,4,5]
//[2,3,4,5]
//λ init [1,2,3,4,5]
//[1,2,3,4]
//λ last [1,2,3,4,5]
//5
//Your job is to implement these functions in your given language. Make sure it doesn't edit the array; 
//that would cause problems! Here's a cheat sheet:

//| HEAD | <----------- TAIL ------------> |
//[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//| <----------- INIT ------------> | LAST |

//head [x] = x
//tail [x] = []
//init [x] = []
//last [x] = x
//Here's how I expect the functions to be called in your language:

//head([1,2,3,4,5]); => 1
//tail([1,2,3,4,5]); => [2,3,4,5]
//Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. 
//There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

//1 solution:

// function head(head) {
//    return Number(head.splice(0, 1));
// }
// function tail(tail) {
//    return tail.slice(1);
// }
// function init(init) {
//    return init.slice(0, -1);
// }
// function last(last) {
//    return Number(last.slice(-1))
// }
// console.log(head([1, 2, 3, 4, 5]));
// console.log(tail([48, 26, 26]));
// console.log(init([1, 2, 3, 4, 5]));
// console.log(last([1, 2, 3, 4, 5]));
// -------------------------------------------

// 6 kyu
// Array Deep Count

// You are given an array. Complete the function that returns the number 
// of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7

//solution:

// function deepCount(arr) {
// return arr.reduce((s,e)=>s+(Array.isArray(e)? deepCount(e):0),arr.length);
//  }
//  console.log(deepCount([1, 2, [3, 4, [5]]]))
