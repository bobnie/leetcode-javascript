/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    let [res,cur] = [[[]],[]];
    generate(nums,0,res,cur);
    return res;
};
const generate = (nums,index,res,cur) =>{
    for(let i = index; i < nums.length; ++i){
        let num = nums[i];
        cur.push(num);
        res.push(cur.slice());
        generate(nums,i + 1,res,cur);
        cur.pop();
        while(i < nums.length - 1 && nums[i] === nums[i + 1])
            ++i;
    }
};