/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let ans,res,hash,len;
var permute = function(nums) {
    len = nums.length,
        ans = [],
        res = [],
        hash = [];
    dfs(0,nums);
    return ans;
};
function dfs(num,nums){
    if(num === len){
        let tmp = res.map(item => item);
        ans.push(tmp);
        return;
    }
    for(let i = 0; i < len; i++){
        if(hash[i]) continue;
        hash[i] = true;
        res.push(nums[i]);
        dfs(num + 1,nums);
        hash[i] = false;
        res.pop();
    }
}