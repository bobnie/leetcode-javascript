/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        [map,res] = [{},[]];
    arr.forEach((v,i) => map[i + 1] = v);
    while(true){
        let item = n % 26;
        if(item === 0)
            item = 26;
        res.push(map[item]);
        n = (n - item) / 26;
        if(n < 1)
            break;
    }
    return res.reverse().join('');
};