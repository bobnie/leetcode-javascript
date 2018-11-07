/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length)
        return false;
    let [hash1,hash2] = [{},{}];
    for(let i = 0; i < s.length; ++i){
        hash1[s[i]] = t[i];
        hash2[t[i]] = s[i];
    }
    let [result1,result2] = ['','']
    for(let i = 0; i < s.length; ++i){
        result1 += hash1[s[i]];
        result2 += hash2[t[i]];
    }
    return result1 === t && result2 === s;
};