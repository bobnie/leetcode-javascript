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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let readRoot = (root,callback) => {
        if(!root)
            return;
        root.left && readRoot(root.left,callback);
        callback && callback(root.val);
        root.right && readRoot(root.right,callback);
    }
    let arr = [];
    readRoot(root,v => arr.push(v));
    arr.slice(0,k);
    return arr[k - 1];
};