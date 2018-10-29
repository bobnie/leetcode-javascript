/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cout = [];
    for(let i = 0; i < nums.length; ++i){
        if(!cout[nums[i]])
            cout[nums[i]] = 1;
        else
            ++ cout[nums[i]];
        if(cout[nums[i]] > nums.length / 2)
            return nums[i];
    }
};