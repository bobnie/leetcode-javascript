/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => a- b);
    let set = new Set(nums),
        arr = Array.from(set);
    arr.reverse();
    console.log(arr)
    if(arr.length >= 3)
        return arr[2];
    return arr[0];
};