/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2),
        res = str.split(''),
        len = res.length;
    res.reverse();
    for(let i = 0; i < 32 - len; ++i)
        res.push('0');
    return parseInt(res.join(''),2);
};
/** 感觉这个也行，但是提交没通过
var reverseBits = function(n) {
    let result =  0;
    for(let i = 0; i < 31; ++i){
        result <<= 1;
        result |= n & 1;
        n >>>= 1;
    }    
    return Math.abs(result);
};
**/
