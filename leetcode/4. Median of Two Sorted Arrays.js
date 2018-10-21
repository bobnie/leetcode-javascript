/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = new Array;
    var len = (nums1.length+nums2.length);
    var mid;
    var l = len/2;
    if(nums1.length==0)
        {
                     for(let j = nums1.length;j<len;j++)
                {                 
                    arr[j] = nums2[len-j-1];  
                }
        }
    else if(nums2.length==0)
        {
                   for(let i = 0;i<nums1.length;i++)
                       arr[i] = nums1[i];
        }
    else
        {
    for(let i = 0;i<nums1.length;i++)
        {
            arr[i] = nums1[i];
                     for(let j = nums1.length;j<len;j++)
                {                 
                    arr[j] = nums2[len-j-1];  
                }
        }
        }
    arr.sort(function(a,b)
    {
        if(a<b) return -1
        else if(a>b) return 1
        else return 0
    });
   var p = Math.floor(l);
    
    if(len%2 == 1)
    {
        mid = arr[p];
    }
    else 
        {
            mid = (arr[l-1]+arr[l])/2;
        }
               return mid;
};