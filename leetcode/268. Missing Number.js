/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = 0;
    for(let i = 1; i <= nums.length; ++i)
        res ^= i ^ nums[i - 1];
    return res;
};