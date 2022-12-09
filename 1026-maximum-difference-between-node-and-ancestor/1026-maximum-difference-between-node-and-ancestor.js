/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    if(!root) return 0;
    let res = 0;
    function dfs(node, max, min) {
        if(!node) {
            res =  Math.max(res, max - min);
            return;
        };
        max = Math.max(max,node.val);
        min = Math.min(min,node.val);
        dfs(node.left, max, min);
        dfs(node.right, max , min);
    }
    dfs(root, root.val, root.val);
    return res;
    
};