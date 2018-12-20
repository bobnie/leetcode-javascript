/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const check = (left,right) => {
        while(s[left] && s[right] && s[left] === s[right]){
            -- left;
            ++ right;
            ++ count;
        }
    }
    let [sArr,count] = [s.split(''),0];
    for(let i = 0; i < s.length; ++i){
        check(i,i + 1);
        check(i - 1,i + 1);
        ++ count;
    }
    return count;
};
