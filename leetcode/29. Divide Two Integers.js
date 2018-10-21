/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(!divisor) return -1;
    let min = (1 <<31),
        max = ~(1 << 31),
        ans = parseInt(dividend / divisor);
    if(ans > max) ans = max;
    if(ans < min) ans = min;
    return ans;
};