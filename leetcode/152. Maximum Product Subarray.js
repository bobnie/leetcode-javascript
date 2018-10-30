/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums === null || nums.length === 0)
        return 0;
    let [max,ans,min] = [nums[0],nums[0],nums[0]];
    for(let i = 1; i < nums.length; ++i){
        let tmax = nums[i] * max,
            tmin = nums[i] * min;
        max = Math.max(Math.max(tmax,nums[i]),tmin);
        min = Math.min(Math.min(tmax,nums[i]),tmin);
        ans = Math.max(ans,max);
    }
    return ans;
};