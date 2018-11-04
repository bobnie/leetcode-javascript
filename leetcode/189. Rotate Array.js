/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length < k)
        k -= nums.length;
    let arr = [];
    for(let i = k; i > 0; --i){
        cout = nums.pop();
        arr.push(cout);
    }
    for(let j = 0; j < arr.length; ++j)
        nums.unshift(arr[j]);
};