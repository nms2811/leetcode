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
var middleNode = function(head) {
    let length = Math.ceil(findLength(head)/2);
    
        for(let i = 0; i < length; i++) {
            head = head.next;
        }
        return head;

    function findLength(node){
        let length = 0;
        while(node.next){
            length+=1;
            node = node.next;
        }
        return length;
    }
};