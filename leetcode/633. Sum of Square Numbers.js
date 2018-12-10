/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i = 0; i <= c; ++i){
        let afterPow = c - Math.pow(i,2),
            item = Math.sqrt(afterPow);
        if(afterPow < 0)
            return false;
        if(item % 1 === 0)
            return true;
    }
    return false;
};