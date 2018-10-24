/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let res = 0;
    if(points.length < 2)
        return points.length;
    const gcd = (a,b) => {
        if(b === 0) return a;
        return gcd(b,a % b);
    };
    for(let i = 0; i < points.length; ++i){
        let [hash,horizontal,vertical,localMax,overlap] = [new Map(),0,0,0,1];
        for(let j = i + 1; j < points.length; ++j){
            let [a,b] = [points[i],points[j]];
            if(a.x === b.x && a.y === b.y) ++ overlap;
            else if(a.x === b.x) ++ horizontal;
            else if(a.y === b.y) ++ vertical;
            else{
                let [dx,dy] = [a.x - b.x,a.y - b.y],
                    d = gcd(dx,dy);
                dx = Math.floor(dx / d);
                dy = Math.floor(dy / d);
                let pair = "" + dx + "," + dy,
                    curPoints = hash.has(pair) ? hash.get(pair) + 1 : 1;
                hash.set(pair,curPoints);
                localMax = Math.max(localMax,curPoints);
            }
        }
        res = Math.max(res,overlap + Math.max(localMax,Math.max(horizontal,vertical)));
    }
    return res;
};