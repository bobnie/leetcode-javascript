/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let [sum,maxSum] = [0,-Infinity];
    for(let i = 0; i < nums.length; ++i){
        sum += nums[i];
        maxSum = Math.max(maxSum,sum);
        if(sum < 0) sum = 0;
    }
    return maxSum;
};