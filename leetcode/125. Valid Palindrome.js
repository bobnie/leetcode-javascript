/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let [beg,end] = [0,s.length - 1];
    while(beg < end){
        if(!s[beg].match(/[a-z0-9]/))
            ++ beg;
        else if(!s[end].match(/[a-z0-9]/))
            -- end;
        else if(s[beg] !== s[end])
            return false;
        else{
            ++ beg;
            -- end;
        }
    }
    return true;
};