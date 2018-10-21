/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let [res,x,y,cout] = [[],0,0,1];
    for(let i = 0; i < n; ++i) res.push([]);
    while(n > 0){
        if(n === 1) {
            res[x][y] = cout;
            break;
        }
        for(let i = 0; i < n - 1; ++i)
            res[x][y++] = cout++;
        for(let i = 0; i < n - 1; ++i)
            res[x++][y] = cout++;
        for(let i = 0; i < n - 1; ++i)
            res[x][y--] = cout++;
        for(let i = 0; i < n - 1; ++i)
            res[x--][y] = cout++;
        x++; y++; n -= 2;
    }
    return res;
};