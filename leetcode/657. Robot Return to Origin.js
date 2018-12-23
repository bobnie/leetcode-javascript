/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let [Ls,Rs,Us,Ds] = [moves.match(/L/g),moves.match(/R/g),moves.match(/U/g),moves.match(/D/g)],
        [LLen,RLen,ULen,DLen] = [Ls ? Ls.length : 0,Rs ? Rs.length : 0,Us ? Us.length : 0,Ds ? Ds.length : 0];
    return LLen === RLen && ULen === DLen;
};