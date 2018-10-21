/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var ans,res;
var combinationSum = function(candidates, target) {
    ans = [];
    candidates.sort(function(a,b){
        return a - b;
    });
    for(let i = 0; i < candidates.length; ++i){
        res = [candidates[i]];
        dfs(i,candidates[i],candidates,target);
    }
    return ans;
};
function dfs(index,sum,candidates,target){
    if(sum === target){
        var tmp = res.map(function(item){
            return item;
        });
        ans.push(tmp);
        return;
    }
    for(let i = index; i < candidates.length; ++i){
        if(sum + candidates[i] > target) continue;
        res.push(candidates[i]);
        dfs(i,sum + candidates[i],candidates,target);
        res.pop();
    }
}