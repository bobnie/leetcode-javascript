/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let [oc,cout] = [1,0];
    for(let i = 1; i < nums.length; ++i){
        if(nums[i] === nums[cout]){
            if(oc === 2)
                continue;
            ++ oc;
        }
        else
            oc = 1;
        ++ cout;
        nums[cout] = nums[i];
    }
    return cout + 1;
};