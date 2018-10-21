/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let newresult,
        arr = nums[0] + nums[1] + nums[2];
    let result = Math.abs(arr - target);
    if(nums.length < 3){
        return [];
    }
    nums.sort(function(a,b){
        return a - b;
    });
    for(let i = 0; i < nums.length - 2; ++i){
            var left = i + 1,
                right = nums.length - 1;
            while(left < right){
                var sum = nums[i] + nums[left] + nums[right];
                newresult = Math.abs(sum - target);
                if(result > newresult){
                    result = newresult;
                    arr = sum;
                }
                if(sum < target) ++left;
                else --right;
            }
    }
    return arr;
};