/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var res = new ListNode(-1);
    res.next = head;
    var cur = res.next;
    var len = 0;
    while(cur !== null){
        len ++;
        cur = cur.next;
    }
    cur = res;
    for(let del = len -n; del > 0; del--) cur = cur.next;
    cur.next = cur.next.next;
    return res.next;
};