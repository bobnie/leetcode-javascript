/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root,root);
};
const isMirror = (node1,node2) => node1 == null && node2 == null || node1 != null && node2 != null && (node1.val === node2.val) && isMirror(node1.left,node2.right) && isMirror(node1.right,node2.left);