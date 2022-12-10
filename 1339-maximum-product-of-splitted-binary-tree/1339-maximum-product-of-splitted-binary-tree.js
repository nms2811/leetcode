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
    let mod = 1e9 + 7;
    let total = max = 0;
    total = totalSum(root);
    totalSum(root);

    return max % mod;

    function totalSum(node) {
        if(!node) return 0;
        let lsum = totalSum(node.left);
        let rsum = totalSum(node.right);
        max = Math.max(max, ((total - lsum) * lsum), ((total - rsum) * rsum))
        return node.val + lsum + rsum;
    }

};