/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let cout = 0;
    for(let i = 0; i < grid.length; ++i){
        for(let j = 0; j < grid[i].length; ++j){
            if(grid[i][j] === '1'){
                traverseIsland(i,j,grid);
                ++ cout;
            }
        }
    }
    return cout;
};
const traverseIsland = (i,j,grid) => {
    let stack = [];
    stack.push([i,j]);
    while(stack.length){
        let pair = stack.pop();
        i = pair[0];
        j = pair[1];
        if(i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j] === '1'){
            grid[i][j] = '2';
            stack.push([i + 1,j]);
            stack.push([i - 1,j]);
            stack.push([i,j + 1]);
            stack.push([i,j - 1]);
        }
    }
};