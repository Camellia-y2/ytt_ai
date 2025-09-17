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
var reverseList = function(head) {
    let prev = null;    // 前一个节点，不要new一个节点，多一个没用的节点
    let curr = head;    // 当前节点

    while (curr) {
        const nextTemp = curr.next; // 暂存下一个节点
        curr.next = prev;           // 反转指针
        prev = curr;                // prev 向前移动
        curr = nextTemp;            // curr 向前移动
    }

    return prev; // 循环结束时，prev 指向原链表的最后一个节点，也就是新头节点
};