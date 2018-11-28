/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    for(let i = 0; i < nums1.length; ++i){
        let item = nums1[i];
        if(nums2.indexOf(item) > -1 && res.indexOf(item) < 0)
            res.push(item);
    }
    return res;
};