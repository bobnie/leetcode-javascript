/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let curLvlIndex = 0,
        cur = triangle[curLvlIndex],
        next;
    while(curLvlIndex < triangle.length - 1){
        next = triangle[curLvlIndex + 1];
        for(let i = 0; i < next.length; ++i){
            let a,b;
            if(i === 0)
                a = Infinity;
            else
                a = cur[i - 1];
            if(i < cur.length)
                b = cur[i];
            else
                b = Infinity;
            next[i] += Math.min(a,b);
        }
        cur = next;
        ++ curLvlIndex;
    }
    return Math.min.apply(null,cur);
};