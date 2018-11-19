/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let [cache,res] = [{},[]],
        item;
    for(let i = 0; i < nums.length; ++i){
        item = nums[i];
        if(cache[item] === undefined)
            cache[item] = 1;
        else
            ++ cache[item];
        if(cache[item] > nums.length / 3 && res.indexOf(item) < 0)
            res.push(item);
    }
    return res;
};