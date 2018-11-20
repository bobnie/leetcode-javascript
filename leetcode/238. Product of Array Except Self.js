/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let [output,left,right] = [Array(nums.length).fill(1),1,1];
    for(let i = 0; i < nums.length - 1; ++i){
        left *= nums[i];
        right *= nums[nums.length - i - 1];
        output[i + 1] *= left;
        output[nums.length - i - 2] *= right;
    }
    return output;
};