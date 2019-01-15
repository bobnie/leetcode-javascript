/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(' '),
        resArr = sArr.map(s => s.split('').reverse().join(''));
    return resArr.join(' ');
};