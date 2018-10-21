/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let result=new Array();
    nums.sort(function(a,b){
        return a-b;
      });
    for(let i = 0; i< nums.length - 3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;
        for(let j = i + 1; j < nums.length - 2; j++){
            if(j > i + 1 && nums[j] == nums[j-1]) continue;
            var left = j + 1,
                right = nums.length - 1,
                sum = target - nums[i] - nums[j]; 
            while(left < right){
                if(nums[left] + nums[right] == sum){
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(left < right && nums[left] == nums[left+1]){
                        left++;
                    }
                    while(left < right && nums[right] == right[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                }else if((nums[left]+nums[right]) < sum) left++;
                else right--;
            }
        }
    }
    return result;
};