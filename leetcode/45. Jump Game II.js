/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let curMax = 0,
        nJumps = 0,
        n = nums.length,
        i = 0;
    while(curMax < n - 1){
        let lastMax = curMax;
        for(; i <= lastMax; ++i) curMax = Math.max(curMax,i + nums[i]);
        nJumps ++;
        if(lastMax === curMax) return -1;
    }
    return nJumps;
};