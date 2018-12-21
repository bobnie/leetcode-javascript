/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0)
        return null;
    let [maxI,max] = [0,nums[0]];
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] > max){
            max = nums[i];
            maxI = i;
        }
    }
    let root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0,maxI));
    root.right = constructMaximumBinaryTree(nums.slice(maxI + 1));
    return root;
};