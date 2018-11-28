/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let [hash,res] = [{},[]];
    let count = nums1.length;
    for(let i = 0; i < nums1.length; ++i){
        hash[nums1[i]] = hash[nums1[i]] || 0;
        ++ hash[nums1[i]];
    }
    for(let i = 0; i < nums2.length && count !== 0; ++i){
        if(hash[nums2[i]] > 0){
            -- hash[nums2[i]];
            -- count;
            res.push(nums2[i]);
        }
    }
    return res;
};