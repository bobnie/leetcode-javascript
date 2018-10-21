/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0)
        return;
    let [row,column] = [new Set(),new Set()];
    for(let i = 0; i < matrix.length; ++i){
        for(let j = 0; j < matrix[0].length; ++j){
            if(matrix[i][j] === 0){
                row.add(i);
                column.add(j);
            }
        }
    }
    row.forEach(i => {
        for(let k = 0; k < matrix[0].length; ++k)
            matrix[i][k] = 0;
    });
    column.forEach(i => {
        for(let k = 0; k < matrix.length; ++k)
            matrix[k][i] = 0;
    });
};