/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let [pArr,sArr] = [pattern.split(''),str.split(' ')],
        [pObj,sObj] = [{},{}];
    if(pArr.length !== sArr.length)
        return false;
    for(let i = 0; i < pattern.length; ++i){
        let [pItem,sItem] = [pArr[i],sArr[i]];
        if(!pObj[pItem] && !sObj[sItem]){
            pObj[pItem] = sItem;
            sObj[sItem] = pItem;
        } else if(pObj[pItem] !== sItem || sObj[sItem] !== pItem)
            return false;
    }
    return true;
};