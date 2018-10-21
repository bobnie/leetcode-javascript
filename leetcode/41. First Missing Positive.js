/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0,
        len = nums.length;
    while(i < len){
        if(nums[i] !== i + 1 && nums[i] > 0 && nums[i] < len && nums[i] !== nums[nums[i] - 1]) swap(i,nums[i] - 1);
        else i++;
    }
    for(i = 0; i < len; i++){
        if(nums[i] !== i + 1) return i + 1;
    }
    return len + 1;
    function swap(i,j){
        nums[i] ^= nums[j];
        nums[j] ^= nums[i];
        nums[i] ^= nums[j];
    }
};