/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let s1 = s.split('').sort(),
        t1 = t.split('').sort();
    for(let i = 0; i < s1.length; ++i){
        if(s1[i] !== t1[i])
            return t1[i];
    }
    return t1[t1.length - 1];
};