/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let len = nums.length,
        res = (new Array(len + 1)).join('0').split('');
    for(let i = 0; i < len; ++ i){
        let item = nums[i];
        res[item - 1] = 0 | res[item - 1] - 1;
        if(res[item - 1] === -2)
            res[item - 1] = item;
    }
    return res.filter((v, i) => v != '0' && v != -1);
};