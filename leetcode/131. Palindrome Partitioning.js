/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    generate(s,0,[],result);
    return result;
};
const generate = (s,index,output,result) => {
    console.log(output);
    if(index === s.length){
        result.push(output.slice());
        return;
    }
    for(let i = index; i < s.length; ++i){
        if(isPalindrom(s,index,i)){
            output.push(s.substring(index,i + 1));
            generate(s,i + 1,output,result);
            output.pop();
        }
    }
};
const isPalindrom = (s,head,tail) => {
    while(head < tail){
        if(s[head] !== s[tail])
            return false;
        ++ head;
        -- tail;
    }
    return true;
};