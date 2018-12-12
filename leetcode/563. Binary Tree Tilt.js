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
var findTilt = function(root) {
    return find(root);
};
const nodeSum = root => {
    if(!root)
        return 0;
    return nodeSum(root.left) + nodeSum(root.right) + root.val;
}
const nodeTilt = root => {
    return Math.abs(nodeSum(root.left) - nodeSum(root.right));
}
const find = root => {
    if(!root)
        return 0;
    return nodeTilt(root) + find(root.left) + find(root.right);
};