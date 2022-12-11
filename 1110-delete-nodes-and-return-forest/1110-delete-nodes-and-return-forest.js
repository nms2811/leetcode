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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let arr = [];
    dfs(root,true);
    return arr;
    function dfs(node, isRoot) {
        if(!node) return null;
        let checkDelete = to_delete.includes(node.val);
        if(isRoot && !checkDelete) arr.push(node);
        node.left = dfs(node.left, checkDelete);
        node.right = dfs(node.right, checkDelete);
        return checkDelete? null: node;
    }
};