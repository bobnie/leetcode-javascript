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
var isBalanced = function(root) {
    if(root === null)
        return true;
    let [lh,rh] = [Height(root.left),Height(root.right)],
        diff = Math.abs(lh - rh);
    if(diff <= 1)
        return isBalanced(root.left) && isBalanced(root.right);
    return false;
};
const Height = node => {
    if(node === null)
        return 0;
    return 1 + Math.max(Height(node.left),Height(node.right));
}