/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length,
        tmp = [];
    for(let i = 0; i < len; ++i){
        tmp[i] = [];
        for(let j = 0; j < len; ++j)
            tmp[i][j] = matrix[i][j];
    }
    for(let i = 0; i < len; ++i)
        for(let j = 0; j < len; ++j)
            matrix[i][j] = tmp[len - j - 1][i];
};