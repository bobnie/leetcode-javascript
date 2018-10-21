/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let longest = 0,
        stack = [],match = [];
    for(let j = 0; j < s.length; j++){
        if(s[j] == '(') stack.push(j);
        else{
            let begin = stack.pop(),
                end = j;
            if(begin !== undefined){
                match[begin] = end;
                match[end] = -1;
            }
        }
    }
     let i = 0,length = 0,begin = 0,end = 0;
    while(i < match.length){
        while(match[i] == undefined && i < match.length) i++;
        if(match[i] == -1){
            if(match[i+1] == undefined){
                end = i;
                length = end - begin + 1;
                if(length > longest) longest = length;
                i++;
            }else i = match[i+1];
        }else{
            begin = i;
            i = match[i];
        }
    }
    return longest;
};