/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let [item,res] = [left,[]];
    while(item <= right){
        if(isDividingNumbers(item))
            res.push(item);
        ++ item;
    }
    return res;
};
const isDividingNumbers = num => {
    let itemString = num.toString();
    if(itemString.match(0))
        return false;
    let itemArr = itemString.split('');
    for(let i = 0; i < itemArr.length; ++i){
        if(num % itemString[i] !== 0)
            return false;
    }
    return true;
};