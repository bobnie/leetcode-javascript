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
var sumNumbers = function(root) {
    let [total,queue] = [0,[]];
    if(root === null)
        return total;
    queue.push(root);
    while(queue.length !== 0){
        let node = queue.shift();
        if(node.left === null && node.right === null)
            total += parseInt(node.val);
        if(node.left){
            node.left.val = '' + node.val + node.left.val;
            queue.push(node.left);
        }
        if(node.right){
            node.right.val = '' + node.val + node.right.val;
            queue.push(node.right);
        }
    }
    return total;
};