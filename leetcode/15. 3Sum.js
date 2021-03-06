/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3){
        return [];
    }
    var result = [],
        arr = [];
    nums.sort(function(a,b){
        return a - b;
    });
    for(let i = 0; i< nums.length-1; i++){
        if(nums[i] !== nums[i-1]){
            var left = i+1,
                right = nums.length - 1;
            while(left < right){
                var sum = nums[i] + nums[left] + nums[right];
                if(sum > 0){
                    right--;
                }else if(sum < 0){
                    left++;
                }else{arr = [nums[i],nums[left],nums[right]];
                             result.push(arr);
                      while(left < right && nums[left] === arr[1]){
                          left++;
                      }
                      while(left < right && nums[right] === arr[2]){
                          right--;
                      }
                     }    
            }
        }
    }
    return result;
};