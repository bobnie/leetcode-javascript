/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [];
    let sums = this.sums;
    if(nums.length > 0){
        sums[0] = nums[0];
        for(let i = 1; i < nums.length; ++i)
            sums[i] = sums[i - 1] + nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sums = this.sums;
    if(i === 0)
        return sums[j];
    return sums[j] - sums[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */