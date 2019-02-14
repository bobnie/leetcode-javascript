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
var findBottomLeftValue = function(root) {
    if(root === null)
        return null;
    let checkArr = [root];
    while(checkArr.length > 0){
        var [newcheckArr,leftValue] = [[],checkArr[0].val];
        for(let i = 0; i < checkArr.length; ++i){
            if(checkArr[i].left)
                newcheckArr.push(checkArr[i].left);
            if(checkArr[i].right)
                newcheckArr.push(checkArr[i].right);
        }
        checkArr = newcheckArr;
    }
    return leftValue;
};