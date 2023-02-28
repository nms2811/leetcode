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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let res = new Set();
    dfs(root);
    return Array.from(res);

    function dfs(node) {
        if(!node) return;
        const key = `(root:${node.val}, left:${dfs(node.left)}, right:${dfs(node.right)})`;
        if(map.has(key)) {
            res.add(map.get(key));
        } else {
            map.set(key, node);
        }
        return key;
        
    }
};