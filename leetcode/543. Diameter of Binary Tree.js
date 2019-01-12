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
var diameterOfBinaryTree = function(root) {
    max = 0;
    check(root);
    return max;
};
const check = root => {
    if(!root)
        return 0;
    let sum = NodeHeigh(root.left) + NodeHeigh(root.right);
    if(sum > max)
        max = sum;
    check(root.left);
    check(root.right);
}
const NodeHeigh = root => {
    if(!root)
        return 0;
        return Math.max(NodeHeigh(root.left),NodeHeigh(root.right)) + 1;
};