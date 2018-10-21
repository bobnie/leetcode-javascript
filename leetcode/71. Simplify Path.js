/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let [arr,result] = [path.split('/'),[]];
    for(let i = 0; i < arr.length; ++i){
        let p = arr[i];
        if(p === '..')
            result.pop();
        else if(p !== '' && p !== '.')
            result.push(p);
    }
    return '/' + result.join('/');
};