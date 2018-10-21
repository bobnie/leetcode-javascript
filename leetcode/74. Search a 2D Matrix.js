/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0)
        return false;
    for(let i = 0; i < matrix.length; ++i){
        for(let j = 0; j < matrix[i].length; ++j){
            if(matrix[i][j] === target)
                return true;
        }
    }
    return false;
};