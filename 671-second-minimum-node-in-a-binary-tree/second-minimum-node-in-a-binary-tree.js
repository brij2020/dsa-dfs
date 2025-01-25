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
var findSecondMinimumValue = function(root) {
    let min = Infinity
    let smin = Infinity

    function dfs(n) {
        if(n == null) return
        if(n.val < min) {
            smin = min
            min = n.val
        } else if(n.val < smin && n.val != min) {
            smin = n.val
        }

        if(n.left) {
            dfs(n.left)

        }
        if(n.right) {
            dfs(n.right)
        }
    }
    
    dfs(root)


    if(isFinite(smin)) {
        return smin
    } else{
        return -1
    }


};