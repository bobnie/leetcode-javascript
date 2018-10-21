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
var deleteDuplicates = function(head) {
    if(head === null)
        return null;
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let node = fakeHead;
    while(node.next != null){
        let tmp = node.next;
        if(tmp.next != null && tmp.val === tmp.next.val){
            while(tmp.next != null && tmp.val === tmp.next.val){
                tmp = tmp.next;
                node.next = tmp.next;
                //tmp.next = null;
            }
        } else
            node = node.next;
    }
    return fakeHead.next;
};