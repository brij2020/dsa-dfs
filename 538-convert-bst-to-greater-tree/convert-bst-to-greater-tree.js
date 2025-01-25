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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    sum = 0;
    const dfsSum = (n) => {
        if (n == null) return;
        sum = sum + n.val
        n.left ? dfsSum(n.left) : null
        n.right ? dfsSum(n.right) : null
    }
    dfsSum(root)
    let sm = 0
    const dfs = (n) => {
        if (n == null) return;
        n.left ? dfs(n.left) : null
        if (n.val !== null) {
            let intm = n.val
            n.val = (sum - sm)
            sm = (sm) + intm
        }
        n.right ? dfs(n.right) : null
    }
    dfs(root)
    return root
};