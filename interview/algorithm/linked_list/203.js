/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return null;
    // 创建虚拟头节点 指向 head
    const dummy = new ListNode(0,head);
    let preNode = dummy; // 上个节点
    let currNode = head; // 当前节点
    while(currNode){
        if(currNode.val === val){
            preNode.next = currNode.next; // 删除节点
        } else {
            preNode = currNode; // 移动指针
        }
        currNode = currNode.next; // 移动当前节点
    }
    return dummy.next; // 新的头节点
};