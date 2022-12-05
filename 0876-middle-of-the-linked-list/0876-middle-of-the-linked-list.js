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
    return getAnswer(length, head);

    function getAnswer(count, node) {
        for(let i = 0; i < count; i++) {
            node = node.next;
        }
        return node;
    }

    function findLength(node){
        let length = 0;
        while(node.next){
            length+=1;
            node = node.next;
        }
        return length;
    }
};