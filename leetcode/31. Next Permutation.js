/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) i--;
    if(i >= 0){
        let j = nums.length -1;
        while(nums[j] <= nums[i]) j--;
        swap(nums,i,j);
    }
    reverse(nums,i + 1,nums.length - 1);
};
let swap = function(nums,i,j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };
let reverse = function(nums,i,j){
        while(i < j) swap(nums,i++,j--);
    };