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
