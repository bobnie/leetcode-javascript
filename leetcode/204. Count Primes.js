/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let [mem,cout] = [[],0];
    if(n <= 2)
        return 0;
    for(let i = 2; i < n; ++i)
        mem[i] = true;
    sq = parseInt(Math.sqrt(n - 1));
    for(let i = 2; i <= sq; ++i){
        if(mem[i]){
            for(let j = i + i; j < mem.length; j += i)
                mem[j] = false;
        }
    }
    for(let i = 2; i < mem.length; ++i){
        if(mem[i])
            ++ cout;
    }
    return cout;
};