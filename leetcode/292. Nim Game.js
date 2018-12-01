/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    let first = n % 4;
    if(0 < first && first < 4)
        return true;
    return false;
};