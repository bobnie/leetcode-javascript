/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftmax = [],
        rightmax = [],
        water = 0;
    for(let i = 0; i < height.length; ++i){
        leftmax[i] = leftmax[i] || 0;
        leftmax[i] = Math.max(leftmax[i - 1] || 0,height[i - 1]);
    }
    for(let i = height.length; i >= 0; --i){
        rightmax[i] = rightmax[i] || 0;
        rightmax[i] = Math.max(rightmax[i + 1] || 0,height[i + 1]);
        let minheight = Math.min(rightmax[i],leftmax[i]),
            waterbottom = height[i];
        if(minheight > waterbottom) water += (minheight - waterbottom);
    }
    return water;
};