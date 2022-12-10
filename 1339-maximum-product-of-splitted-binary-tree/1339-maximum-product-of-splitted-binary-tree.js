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
var maxProduct = function(root) {
    let max = -Infinity;
    let res = [];
    let mod = 1e9 + 7;
    let total = totalSum(root);

    for(let e of res) {
        let curr = (total - e) * e;
        max = Math.max(max, curr);
    }
    return max % mod;

    function totalSum(node) {
        if(!node) return 0;
        let lsum = totalSum(node.left);
        let rsum = totalSum(node.right);
        res.push(lsum, rsum);
        return node.val + lsum + rsum;
    }
};