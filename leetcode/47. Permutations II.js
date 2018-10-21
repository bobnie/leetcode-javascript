/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    return permut(nums.sort((a,b) => a - b),[]);
};
const permut = (nums,partial) =>{
    if(nums.length === 0) return [partial];
    let listSol = [];
    for(let i = 0; i < nums.length; ++i){
        let endRepeated = i;
        while(endRepeated < nums.length && nums[i] === nums[endRepeated])
            ++ endRepeated;
        let arrayWithoutI = nums.slice(0,i).concat(nums.slice(i + 1,nums.length)),
            partialSol = partial.concat([nums[i]]),
            sol = permut(arrayWithoutI,partialSol);
        if(sol.length > 0) listSol = listSol.concat(sol);
        i = endRepeated - 1;
    }
    return listSol;
};