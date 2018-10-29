/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let [total,base] = [0,26];
    for(let i = 0; i < s.length; ++i){
        let [pow,num] = [s.length - i - 1,getNumber(s[i])];
        total += Math.pow(base,pow) * num;
    }
    return total;
};
const getNumber = c => {
    let [charCode0A,charCode0fTarget] = ['A'.charCodeAt(0),c.charCodeAt(0)];
    return charCode0fTarget - charCode0A + 1;
};