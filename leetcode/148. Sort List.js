/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head)
        return null;
    let res,
        [arr,next] = [[],head];
    while(next){
        arr.push(next.val);
        next = next.next;
    }
    arr.sort((a,b) => a - b);
    res = new ListNode(arr[0]);
    next = res;
    for(let i = 1; i < arr.length; ++i){
        next.next = new ListNode(arr[i]);
        next = next.next;
    }
    return res;
};