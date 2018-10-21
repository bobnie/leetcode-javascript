/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let cout = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        if(i === nums.length - 1) cout++;
        else if(nums[i] === nums[i+1]) nums.splice(i,1);
        else cout++;
    }
    return cout;
};