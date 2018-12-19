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
var averageOfLevels = function(root) {
    let [checkArr,resArr] = [[root],[root.val]];
    while(checkArr.length > 0){
        let newcheckArr = [];
        for(let i = 0; i < checkArr.length; ++i){
            let item = checkArr[i];
            if(item.left)
                newcheckArr.push(item.left);
            if(item.right)
                newcheckArr.push(item.right);
        }
        checkArr = newcheckArr;
        if(checkArr.length > 0){
            let sum = checkArr.reduce((a,b) => a + b.val,0);
            resArr.push(sum / checkArr.length);
        }
    }
    return resArr;
};