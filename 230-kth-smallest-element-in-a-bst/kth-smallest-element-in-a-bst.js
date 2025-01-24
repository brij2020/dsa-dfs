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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    


    let c = 0;
    let res = 0
    const dfs = (n) => {
        if(n == null) {
            return 
        }
        if(n.left) { 
         dfs(n.left)
        }
        c = c + 1
        if(c == k){
           res = n.val
        }
        if(n.right) {
            dfs(n.right)
        }
        
    }
    dfs(root);
    return res
};