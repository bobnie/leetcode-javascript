/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let [processed,max] = [[],0];
    for(let i = 0; i < words.length; ++i)
        processed.push(compute(words[i]));
    for(let i = 0; i < words.length; ++i){
        for(let j = i + 1; j < words.length; ++j){
            if((processed[i] & processed[j]) === 0){
                let cur = words[i].length * words[j].length;
                if(max < cur)
                    max = cur;
            }
        }
    }
    return max;
};
const compute = word => {
    let [val,base] = [0,'a'.charCodeAt(0)];
    for(let i = 0; i < word.length; ++i)
        val |= (1 << (word.charCodeAt(i) - base));
    return val;
};