/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(candidates.length === 0) return [];
    let res = [];
    candidates.sort((a,b) => a - b);
    dfs(candidates,target,[],res,0);
    return res;
};
function dfs(candidates,target,path,ret,index){
    if(target < 0) return;
    if(target === 0){
        let tmp = [];
        path.forEach(i => {tmp.push(i)});
        ret.push(tmp);
        return;
    }
    for(let i = index; i < candidates.length; i++){
        if(i !== index && candidates[i] === candidates[i - 1]) continue;
        path.push(candidates[i]);
        dfs(candidates,target - candidates[i],path,ret,i+1);
        path.splice(path.length - 1,1);
    }
};