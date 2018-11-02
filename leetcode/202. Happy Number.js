/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n === null)
        return false;
    let [val,hash] = [n,{}];
    while(!hash[val]){
        if(val === 1)
            return true;
        hash[val] = true;
        let sn = val +'',
            [sarr,total] = [sn.split(''),0]
        for(let i = 0; i < sarr.length; ++i){
            si = parseInt(sarr[i]);
            total += Math.pow(si,2);
        }
        val = total;
    }
    return false;
};