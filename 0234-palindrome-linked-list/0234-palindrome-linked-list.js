/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head == null || head.next === null) return true;
    let mid = head;
    let end = head;
    while(end.next !== null && end.next.next !== null) {
        mid = mid.next;
        end = end.next.next;
    }
    mid.next = reverseList(mid.next);
    mid = mid.next;

    while(mid != null){
        if(head.val !== mid.val) return false;
        head = head.next;
        mid = mid.next;
    }
    return true;

    function reverseList(head) {
        let prev = null;
        let temp = null;
        while(head !== null) {
            temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }
        return prev;
    }
};
