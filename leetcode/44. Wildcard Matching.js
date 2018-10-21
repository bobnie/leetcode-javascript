/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function mathChar(c,p){
    return (p === '?' || p === c);
}
var isMatch = function(s, p) {
    if(s === null || p === null) return false;
    let idxs = 0,
        idxp = 0,
        lens = s.length,
        lenp = p.length,
        back = false,
        pres = 0,
        prep = 0;
    while(idxs < lens){
        let chars = s[idxs],
            charp = p[idxp];
        if(idxp < lenp && mathChar(s[idxs],p[idxp])){
            idxp ++;
            idxs ++;
        }else if(idxp < lenp && p[idxp] === '*'){
            while(idxp < lenp && p[idxp] === '*') idxp ++;
            back = true;
            pres = idxs;
            prep = idxp;
        }else if(back){
            idxs = ++ pres;
            idxp = prep;
        }else return false;
    }
    while(idxp < lenp && p[idxp] == '*') idxp ++;
    if(idxs === lens && idxp === lenp) return true;
    return false;
};