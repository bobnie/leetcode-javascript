/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root === null)
        return 0;
    let [sum,left,right] = [0,root.left,root.right];
    if(left !== null && left.left === null && left.right === null)
        sum += left.val + sumOfLeftLeaves(right);
    else
        sum += sumOfLeftLeaves(left) + sumOfLeftLeaves(right);
    return sum;
};