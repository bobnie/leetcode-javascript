/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices === null || prices.length === 0)
        return 0;
    let [max,min,diff] = [0,Infinity,0];
    for(let i = 0; i < prices.length; ++i){
        let price = prices[i];
        if(min > price)
            min = price;
        diff = price - min;
        if(max < diff)
            max = diff;
    }
    return max;
};