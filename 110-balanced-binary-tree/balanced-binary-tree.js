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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isbalanced = true
    const inner = (n) => {
        if(n == null ) return - 1
        let lh = inner(n.left);
        let rh = inner(n.right)
        let depth =  lh-rh
        if(Math.abs(depth) > 1)  isbalanced = false;
        return 1 + Math.max(lh, rh)
    }
    inner(root)
    return isbalanced


};