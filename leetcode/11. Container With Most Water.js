/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxarea = 0, l = 0, r = height.length - 1;
        while (l < r) {
            maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
            height[l] < height[r] ? ++l : --r;
        }
        return maxarea;
};