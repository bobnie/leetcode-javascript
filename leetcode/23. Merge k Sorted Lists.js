/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];
    lists.forEach(function(item){
        while(item){
            arr.push(new ListNode(item.val));
            item = item.next;
        }
    });
    arr.sort(function(a,b){
        return a.val - b.val;
    });
    if(!arr.length) return null;
    for(let i = 0 ;i < arr.length - 1; i++) arr[i].next = arr[i+1];
    return arr[0];
};