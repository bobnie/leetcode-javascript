/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let numsleft = nums[0];
    for(let i = 1; i < nums.length; ++i){
        numsleft --;
        if(numsleft < 0) return false;
        numsleft = Math.max(nums[i],numsleft);
    }
    return numsleft >= 0;
};