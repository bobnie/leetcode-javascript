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
var findSecondMinimumValue = function(root,res) {
    if(!root)
        return -1;
    if(!res)
        res = [];
    let[left,right,val] = [root.left,root.right,root.val];
    if(res.indexOf(val) < 0){
        res.push(val);
        res.sort((a,b) => a - b);
        res.splice(2);
    }
    if(left && right && res.length === 2 && val > res[1]){} else{
        left && findSecondMinimumValue(left,res);
        right && findSecondMinimumValue(right,res);
    }
    if(res.length < 2)
        return -1;
    return res[1];
};