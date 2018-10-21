/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
 let strMap = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
 let res = [];
  if (!digits) {
    return [];
  }
  if(digits.length == 1){
      return [...strMap[digits]]
  }
    let lastdigits = digits[digits.length - 1];
    for(let dig of strMap[lastdigits]){
        res = res.concat(letterCombinations(digits.slice(0,-1)).map(el => el + dig))
    }
    return res
};