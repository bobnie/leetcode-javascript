/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let [left,right] = [0,num];
    while(left <= right){
        let mid = left + parseInt((right - left) / 2),
            pow = mid * mid;
        if(pow === num)
            return true;
        else if(pow < num)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return false;
};