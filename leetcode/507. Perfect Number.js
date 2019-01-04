/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num === 0)
        return false;
    let res = 0;
    for(let i = 1; i < num; ++i){
        if(num % i === 0)
            res += i;
    }
    if(res === num)
        return true;
    return false;
};