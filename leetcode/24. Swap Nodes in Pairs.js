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
var swapPairs = function(head) {
    let arr = [];
    if(!head) return null;
    while(head){
        let next = head.next;
        head.next = null;
        arr.push(head);
        head = next;
    }
    for(let i = 0; i < arr.length; i += 2){
        let a = arr[i],
            b = arr[i+1];
        if(!b) continue;
        arr[i] = b; arr[i+1] = a;
    }
    for(let i = 0; i < arr.length - 1; i++){
        arr[i].next = arr[i+1];
    }
    return arr[0];
};