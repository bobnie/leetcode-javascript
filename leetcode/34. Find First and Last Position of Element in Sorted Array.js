/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let arr = [];
    if(nums.indexOf(target) == -1) arr = [-1,-1];
    for(let i = 0; i< nums.length; i++){
        if(nums[i] == target){
            arr.push(i);
            break;
        }
    }
    for(let j = nums.length - 1; j >= 0; j--){
        if(nums[j] == target){
            arr.push(j);
            break;
        }
    }
    return arr;
};