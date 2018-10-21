/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let res = 0;
    if(target < nums[0]) res = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target) res = i;
        else if(nums[i] < target && nums[i+1] > target) res = i+1;
        else if(nums[i] < target) res = i+1;
    }
    return res;
};