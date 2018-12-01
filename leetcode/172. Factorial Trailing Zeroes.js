/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    if(n < 0)
        return -1;
    while(n >= 5){
        n = parseInt(n / 5);
        count += n;
    }
    return count;
};