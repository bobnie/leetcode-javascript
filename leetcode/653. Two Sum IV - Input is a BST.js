/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, checkArr) {
    let val = root.val;
    if(!root)
        return false;
    if(!checkArr)
        checkArr = [];
    if(checkArr.indexOf(val) > -1)
        return true;
    else
        checkArr.push(k - val);
    return (root.left && findTarget(root.left,k,checkArr)) || (root.right && findTarget(root.right,k,checkArr)) || false;
};