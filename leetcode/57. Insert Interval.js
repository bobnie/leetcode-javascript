/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    let [res,isInsert] = [[],false];
    for(let i = 0; i < intervals.length; ++i){
        let interval = intervals[i];
        if(isInsert) res.push(interval);
        else if(newInterval.end < interval.start){
            res.push(newInterval);
            res.push(interval);
            isInsert = true;
        } else if(interval.end < newInterval.start)
            res.push(interval);
        else{
            newInterval.start = Math.min(newInterval.start,interval.start);
            newInterval.end = Math.max(newInterval.end,interval.end);
        }
    }
    if(!isInsert) res.push(newInterval);
    return res;
};