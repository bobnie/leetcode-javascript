/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums === null && nums.length === 0)
        return 0;
    let n = nums.length,
        [start,end,mid] = [0,n - 1,0];
    while(start <= end){
        mid = start + parseInt((end - start) / 2);
        if((mid === 0 || nums[mid] > nums[mid - 1]) && (mid === n -1 || nums[mid] >= nums[mid + 1]))
            return mid;
        else if(mid > 0 && nums[mid] < nums[mid - 1])
            end = mid - 1;
        else
            start = mid + 1;
    }
    return mid;
};