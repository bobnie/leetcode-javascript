/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 0) return 0;
    if(n === 1 || n === 2) return n;
    let res = new Int32Array(n);
    res[0] = 1;
    res[1] = 2;
    for(let i = 2; i < n; ++i){
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n - 1];
};