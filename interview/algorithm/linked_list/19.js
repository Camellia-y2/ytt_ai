/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let cur = dummy;
    let len = 0;
    // 计算链表长度
    while(cur.next){
        len++;
        cur = cur.next;
    }
    let size = len - n;//从第几个开始改
    let pre = dummy;
    while(size > 0){
        pre = pre.next; // 最终指向被删元素的前一个
        size --;
    }
    pre.next = pre.next.next;
    
    return dummy.next; // 防止被删除的是头结点
};

// 时间复杂度 O(n)
// 空间复杂度 O(1)