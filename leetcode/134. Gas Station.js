/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let [start,total,tank] = [0,0,0];
    for(let i = 0; i < gas.length; ++i){
        tank += gas[i] - cost[i];
        if(tank < 0){
            start = i + 1;
            total += tank;
            tank = 0;
        }
    }
    return (tank + total < 0) ? -1 : start;
};