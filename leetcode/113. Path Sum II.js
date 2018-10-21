/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const binaryTreePaths = (root,path,arr) => {
    if(!root)
        return [];
    if(!arr)
        arr = [];
    let val = root.val;
    path = path ? path + '->' + val : val.toString();
    if(!root.left && !root.right){
        let resPath = path.split('->').map(v => Number(v));
        if(resPath.reduce((a,b) => a + Number(b),0) === sum)
            arr.push(resPath);
    }
    else{
        root.left && binaryTreePaths(root.left,path,arr);
        root.right && binaryTreePaths(root.right,path,arr);
    }
    return arr;
};
    return binaryTreePaths(root);
};
