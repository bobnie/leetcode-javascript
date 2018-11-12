/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let [arr1,arr2,index] = [version1.split('.'),version2.split('.'),0],
        len = Math.max(arr1.length,arr2.length);
    while(index < len){
        let[v1,v2] = [parseInt(arr1[index]),parseInt(arr2[index])];
        if(isNaN(v1) && v2 !== 0)
            return -1;
        if(isNaN(v2) && v1 !== 0)
            return 1;
        if(v1 > v2)
            return 1;
        else if(v1 < v2)
            return -1;
        ++ index;
    }
    return 0;
};