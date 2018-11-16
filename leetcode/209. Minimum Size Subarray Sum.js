/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let [sum,right,left,minLen] = [0,0,0,Infinity];
    while(right < nums.length){
        while(right < nums.length && sum < s)
            sum += nums[right ++];
        while(sum >= s){
            minLen = Math.min(minLen,right - left);
            sum -= nums[left ++];
        }
    }
    return minLen > nums.length ? 0 : minLen;
};