/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] !== nums[i + 1])
            res.push(nums[i]);
        else
            ++ i;
    }
    return res;
};