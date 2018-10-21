/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort((a,b) => a.start > b.start ? 1 : -1);
    if(intervals.length) res.push(intervals[0]);
    for(let i = 1; i < intervals.length; ++i){
        let [interval,last] = [intervals[i],res.pop()];
        if(interval.start > last.end){
            res.push(last);
            res.push(interval);
        } else{
            last.end = Math.max(interval.end,last.end);
            res.push(last);
        }
    }
    return res;
};