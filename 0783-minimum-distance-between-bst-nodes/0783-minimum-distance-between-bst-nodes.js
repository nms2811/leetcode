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
var minDiffInBST = function(root) {
    let min = Infinity, prev = null;
    dfs(root);
    return min;

   function dfs(node) {
       if(node === null) return;
       dfs(node.left);
       if(prev !== null) {
           min = Math.min(min, Math.abs(node.val - prev));
       }
        prev = node.val;
       dfs(node.right);
   } 
};