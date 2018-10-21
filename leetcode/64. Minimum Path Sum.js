/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0)
        return 0;
    let dp = [[]];
    dp[0][0] = grid[0][0];
    for(let i = 1; i < grid.length; ++i){
        dp.push([]);
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for(let j = 1; j < grid[0].length; ++j)
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    for(let i = 1; i < grid.length; ++i){
        for(let j = 1; j < grid[0].length; ++j){
            let [val1,val2] = [dp[i - 1][j],dp[i][j - 1]];
            dp[i][j] = Math.min(val1,val2) + grid[i][j];
        }
    }
    return dp[dp.length - 1][dp[0].length - 1];
};