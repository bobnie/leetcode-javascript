/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l3=new ListNode(0);//初始化
    var rst=l3;
    var temp=0,flag=0;//当前值，进位值
    if(l1==null&&l2==null) return rst;
    while(l1!=null||l2!=null){
        var num1=l1==null?0:l1.val;//空链表补0
        var num2=l2==null?0:l2.val;//空链表补0
        temp=num1+num2+flag;
        if(temp>9){
            flag=1;
            temp=temp%10;
        }else{
            flag=0;
        }
        l3.next=new ListNode(temp);//.next为节点，初始化一个新节点
        //处理下一位
        l3=l3.next;
        l1=l1==null?null:l1.next;//空链表补null
        l2=l2==null?null:l2.next;
    }
    if(flag==1){
        l3.next=new ListNode(1);
    }

    return rst.next;
};