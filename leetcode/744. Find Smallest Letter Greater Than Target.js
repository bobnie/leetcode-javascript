/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let arr = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    i = arr.indexOf(target);
    while(1){
        ++ i;
        if(i === arr.length)
            i = 0;
        if(letters.indexOf(arr[i]) > -1)
            return arr[i];
    }
};