/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => ('' + a  + b) > ('' + b + a) ? -1 : 1);
    let res = nums.join('');
    return parseInt(res) == 0 ? '0' : res;
};