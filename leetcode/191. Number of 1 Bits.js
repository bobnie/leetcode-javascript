/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let cout = 0;
    if(n === null)
        return n;
    while(n !== 0){
        n = n & (n - 1);
        ++ cout;
    }
    return cout;
};