/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [...(new Array(nums.length + 1)).keys()];
    res.shift();
    for(let i = 0; i < nums.length; ++i){
        let item = nums[i];
        if(res[item - 1])
            res[item - 1] = 0;
    }
    return res.filter(v => v != 0);
};