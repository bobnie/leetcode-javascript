/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let lists = [];
    helper(lists,root,0);
    lists = lists.reverse();
    return lists;
};
const helper = (lists,root,heigh) => {
    if(root == null)
        return;
    if(heigh >= lists.length)
        lists.push([]);
    lists[heigh].push(root.val);
    helper(lists,root.left,heigh + 1);
    helper(lists,root.right,heigh + 1);
}