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
var minDepth = function(root) {
    let [res,checkArr] = [0,[root]]
    if(root === null)
        return 0;
    while(checkArr.length > 0){
        ++ res;
        let newcheckArr = [];
        if(checkArr.some(v => {
            v.left && newcheckArr.push(v.left);
            v.right && newcheckArr.push(v.right);
            return !v.right && !v.left;
        })) return res;
        checkArr = newcheckArr;
    }
    return res;
};