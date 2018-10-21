/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0)
        return res;
    let [rows,cols] = [matrix.length,matrix[0].length],
        [x,y] = [0,0];
    while(rows > 0 && cols > 0){
        if(rows === 1){
            for(let i = 0; i < cols; ++i)
                res.push(matrix[x][y ++]);
            break;
        } else if(cols === 1){
            for(let i = 0; i < rows; ++i)
                res.push(matrix[x ++][y]);
            break;
        }
        for(let i = 0; i < cols - 1; ++i)
            res.push(matrix[x][y ++]);
        for(let i = 0; i < rows - 1; ++i)
            res.push(matrix[x ++][y]);
        for(let i = 0; i < cols - 1; ++i)
            res.push(matrix[x][y --]);
        for(let i = 0; i < rows - 1; ++i)
            res.push(matrix[x --][y]);
        x ++;
        y ++;
        cols -= 2;
        rows -= 2;
    }
    return res;
};