/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {};
    if(s.length !== t.length)
        return false;
    for(let i = 0; i < s.length; ++i){
        let char = s[i];
        hash[char] = hash[char] || 0;
        ++ hash[char];
    }
    for(let i = 0; i < t.length; ++i){
        let char = t[i];
        if(hash[char] === undefined || hash[char] === 0)
            return false;
        -- hash[char];
    }
    return true;
};