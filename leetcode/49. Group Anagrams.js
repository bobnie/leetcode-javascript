/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {},
        result = [];
    for(let i = 0; i < strs.length; ++i){
        let str = strs[i],
            key = sort(str);
        hash[key] = hash[key] || [];
        hash[key].push(str);
    }
    for(x in hash) result.push(hash[x]);
    return result;
};
let sort = s => {
        let arr = s.split('');
        arr.sort((a,b) => a > b ? 1 : -1);
        return arr.join('');
    }