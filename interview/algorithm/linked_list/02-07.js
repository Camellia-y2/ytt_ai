// 面试题02.07. 链表相交
// Date: 2025-9-21
// 时间复杂度O(m+n)
// 空间复杂度O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    let curB = headB;
    let lenA = 0, lenB = 0;
    while(curA){
        lenA++;
        curA = curA.next;
    }
    while(curB){
        lenB++;
        curB = curB.next;
    }

    // 找到差值，对齐短的
    let cha;
    curA = headA; curB = headB;// 重置
    if(lenA >= lenB){
        cha = lenA - lenB;
        while(cha--){
            curA = curA.next;
        }
    } else {
        cha = lenB - lenA;
        while(cha--){
            curB = curB.next;
        }
    }

    while(curA){
        // （注意：是比较节点引用，不是值）
        // 以某个节点开头的一整个子链条相等
        if(curA == curB) return curA;
        curA = curA.next;
        curB = curB.next;
    }
    return null; 
};

