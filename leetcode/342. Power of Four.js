/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num < 1)
        return false;
    while(num >= 4){
        if(num % 4 !== 0)
            return false;
        num /= 4;
    }
    if(num === 1)
        return true;
    else
        return false;
};