/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);
    if(nums.length === 0)
        return 0;
    for(let i = 1; i < nums.length; ++i){
        for(let j = 0; j < i; ++j){
            if(nums[i] > nums[j])
                dp[i] = Math.max(dp[i],dp[j] + 1);
        }
    }
    return Math.max.apply(null,dp);
};