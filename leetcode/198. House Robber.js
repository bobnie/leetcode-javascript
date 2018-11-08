/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums === null)
        return nums;
    let [even,odd] = [0,0];
    for(let i = 0; i < nums.length; ++i){
        if(i % 2 === 0)
            even = Math.max(even + nums[i],odd);
        else
            odd = Math.max(odd + nums[i],even);
    }
    return Math.max(even,odd);
};