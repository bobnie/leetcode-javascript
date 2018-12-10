/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let [smallArr,bigArr] = [[],[]];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] <= 0)
            smallArr.push(nums[i]);
        else
            bigArr.push(nums[i]);
    }
    if(bigArr.length === 0)
        return smallArr[smallArr.length - 1] * smallArr[smallArr.length - 2] * smallArr[smallArr.length - 3];
    else if(bigArr.length === 1)
        return bigArr[0] * smallArr[0] * smallArr[1];
    else if(bigArr.length > 2 && smallArr.length >= 2){
        let [bigRes,smallRes] = [bigArr[bigArr.length - 1] * bigArr[bigArr.length - 2],smallArr[0] * smallArr[1]];
        return Math.max(bigRes * bigArr[bigArr.length - 3],smallRes * bigArr[bigArr.length - 1]);
    } else
        return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
};