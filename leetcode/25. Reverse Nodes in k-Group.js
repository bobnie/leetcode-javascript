/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
     let arr = [];
    if(!head) return null;
    while(head){
       arr.push(new ListNode(head.val));
       head = head.next;
   }
    let len  =arr.length,
        res = [];
    for(let i = 0; i < len; i += k){
        let tmp;
        if(i + k > len) tmp = arr.slice(i,len);
        else{
            tmp = arr.slice(i,i+k);
            tmp.reverse();
        }
        Array.prototype.push.apply(res,tmp);
    }
    for(let i = 0; i < res.length - 1; i++) res[i].next = res[i+1];
    return res[0];
};