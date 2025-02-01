/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let a1 = {s:""};
    let a2 = {s:""};
    const dfs = (n:TreeNode|null, s:any):void => {
        if(n.left == null && n.right == null) {
            s.s = s.s+'-'+String(n.val)
            return
        }
        n.left ?  dfs(n.left,s) :null
        n.right ? dfs(n.right,s): null
    }
    
    dfs(root1, a1)
    dfs(root2, a2)

    return a1.s == a2.s
};