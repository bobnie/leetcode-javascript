/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    generate(nums,0,[],result);
    return result;
};
const generate = (nums,index,cur,result) => {
    if(index === nums.length){
        result.push(cur.slice());
        return;
    }
    generate(nums,index + 1,cur,result);
    cur.push(nums[index]);
    generate(nums,index + 1,cur,result);
    cur.pop();
};