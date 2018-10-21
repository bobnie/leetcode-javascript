/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let cout = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] !== val) cout++;
        else nums.splice(i,1);
    }
    return cout;
};