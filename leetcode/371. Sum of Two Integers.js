/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b !== 0){
        let carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    return a;
};