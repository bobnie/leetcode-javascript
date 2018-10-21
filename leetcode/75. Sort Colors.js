/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let[i,j,k] = [0,0,0]; k < nums.length; ++k){
        let tmp = nums[k];
        nums[k] = 2;
        if(tmp < 2){
            nums[j] = 1;
            ++j;
        }
        if(tmp === 0){
            nums[i] = 0;
            ++i
        }
    }
};