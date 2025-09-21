/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 虚拟节点
    const dummy = new ListNode(0, head);
    let cur = dummy;
    while(cur.next && cur.next.next){
        let temp1 = cur.next;
        let temp2 = cur.next.next;
        let temp3 = cur.next.next.next;

        // 交换
        cur.next = temp2;
        temp2.next = temp1;
        temp1.next = temp3;

        cur = cur.next.next; // 移动两个节点，开始下一轮
    }
    return dummy.next;
};