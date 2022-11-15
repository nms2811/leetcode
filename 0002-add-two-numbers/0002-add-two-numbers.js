/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let count = 0;
    let rn;
    let cn;
    let check = 0;
    addNext(l1,l2);
    
    function addNext(l1, l2) {
        if(!l1 && !l2 && !count) return;
        check = (l1? l1.val: 0) + (l2? l2.val: 0) + count;
        count = Math.floor(check / 10);
        check = check % 10; 
        if(!rn) {
            rn = new ListNode(check);
            cn = rn;
        } else {
            cn.next = new ListNode(check);
            cn = cn.next;
        }
        
        
        addNext((l1?l1.next: null), (l2?l2.next: null))
    }
    return rn;
};