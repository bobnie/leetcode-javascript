/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let [result,stack] = [[],[]];
    if(root === null)
        return result;
    stack.push(root);
    while(stack.length){
        let node = stack.pop();
        result.push(node.val);
        if(node.right !== null)
            stack.push(node.right);
        if(node.left !== null)
            stack.push(node.left);
    }
    return result;
};