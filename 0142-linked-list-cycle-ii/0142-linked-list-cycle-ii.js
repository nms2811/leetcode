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
var detectCycle = function(head) {
    let p1 = head, p2 = head;
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) break;
    }
    if(!p2 || !p2.next) return null;

    p2 = head;

    while(p2 !== p1) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};