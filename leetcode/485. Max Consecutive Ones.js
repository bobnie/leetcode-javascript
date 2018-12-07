/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let [str,reg,max] = [nums.join(''),/1+/g,0],
        match = str.match(reg);
    if(!match)
        return max;
    match.forEach(v => {
        if(max < v.length)
            max = v.length;
    });
    return max;
};