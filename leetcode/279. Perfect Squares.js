/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let [squart_root,dp] = [1,[]];
    for(let i = 1; i < n + 1; ++i){
        if(i === Math.pow(squart_root,2)){
            dp[i] = 1;
            ++ squart_root;
        } else{
            var min = i;
            for(let j = squart_root - 1; j > 0; --j)
                min = Math.min(min,1 + dp[i - j * j]);
            dp[i] = min;
        }
    }
    return dp[n];
};