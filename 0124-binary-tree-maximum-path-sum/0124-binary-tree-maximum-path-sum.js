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
var maxPathSum = function(root) {
    let max = -Infinity;
    dfs(root);
    return max;
    function dfs(node) {
        if(!node) return 0;
        let lsum = Math.max(0, dfs(node.left));
        let rsum = Math.max(0, dfs(node.right));
        max = Math.max(max, node.val + lsum + rsum);
        return Math.max(lsum, rsum) + node.val;
    }
    
};