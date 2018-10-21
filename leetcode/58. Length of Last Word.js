/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0 || s === null) return 0;
    let str = s.split(/\s/).filter(it => it.length !== 0);
    if(str.length === 0) return 0;
    return str[str.length - 1].length;
};