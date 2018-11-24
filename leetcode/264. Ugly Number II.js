/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let [uglys,p2,p3,p4] = [[1],0,0,0];
    while(uglys.length < n){
        let [uglys2,uglys3,uglys4] = [uglys[p2] * 2,uglys[p3] * 3,uglys[p4] * 5],
            minV = Math.min(uglys2,uglys3,uglys4);
        if(minV === uglys2)
            ++ p2;
        if(minV === uglys3)
            ++ p3;
        if(minV === uglys4)
            ++ p4;
        if(minV !== uglys[uglys.length - 1])
            uglys.push(minV);
    }
    return uglys[n - 1];
};