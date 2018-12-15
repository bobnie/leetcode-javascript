/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    return check(s,t);
};
const isSameTree = (p,q) => {
    if(p === null && q !== null)
        return false;
    if(p !== null && q === null)
        return false;
    if(p === null && q === null)
        return true;
    if(p.val !== q.val)
        return false;
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
}
const check = (s,t) => isSameTree(s,t) || (s && check(s.left,t)) || (s && check(s.right,t)) || false;